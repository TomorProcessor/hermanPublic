import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/User';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  collectionName = 'Users';

  constructor(private afs: AngularFirestore) {}

  create(user: User) {
    return this.afs
      .collection<User>(this.collectionName)
      .doc(user.id)
      .set(user);
  }

  setUserAdmin(userId: string) {
    const userRef = this.afs.collection(this.collectionName).doc(userId);
    return userRef.update({ isAdmin: true });
  }

  isAdmin(userId: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.afs
        .collection('Users')
        .doc(userId)
        .valueChanges()
        .subscribe(
          (user: any) => {
            if (user && user.isAdmin) {
              resolve(true);
            } else {
              resolve(false);
            }
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  getByEmail(email: string): Observable<User[]> {
    return this.afs
      .collection<User>(this.collectionName, (ref) =>
        ref.where('email', '==', email)
      )
      .valueChanges();
  }

  getUser(userId: string): Observable<User | null> {
    return this.afs
      .collection<User>(this.collectionName)
      .doc(userId)
      .valueChanges()
      .pipe(map((user) => user || null));
  }

  getAll() {
    return this.afs.collection<User>(this.collectionName).valueChanges();
  }

  update(user: User) {
    return this.afs
      .collection<User>(this.collectionName)
      .doc(user.id)
      .set(user);
  }

  delete(id: string) {
    return this.afs.collection<User>(this.collectionName).doc(id).delete();
  }
}
