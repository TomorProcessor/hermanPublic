import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Message } from '../models/Message';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  collectionName = 'Messages';

  constructor(private afs: AngularFirestore) {}

  getMessages(): Observable<Message[]> {
    return this.afs
      .collection<Message>('Messages', (ref) => ref.orderBy('date', 'desc'))
      .valueChanges();
  }

  create(message: Message) {
    message.id = this.afs.createId();
    return this.afs
      .collection<Message>(this.collectionName)
      .doc(message.id)
      .set(message);
  }

  getAll() {
    return this.afs.collection<Message>(this.collectionName).valueChanges();
  }

  update(message: Message) {
    return this.afs
      .collection<Message>(this.collectionName)
      .doc(message.id)
      .set(message);
  }

  delete(id: string) {
    return this.afs.collection<Message>(this.collectionName).doc(id).delete();
  }
}
