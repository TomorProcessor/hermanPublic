import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Message } from 'src/shared/models/Message';
import { User } from 'src/shared/models/User';
import { MessageService } from 'src/shared/services/message.service';
import { UserService } from 'src/shared/services/user.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  message: any;
  currentUser: User | null = null;
  isAdmin: boolean = false;
  dataSource: any;

  constructor(
    private messageService: MessageService,
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private userService: UserService
  ) {}

  messageObject: any = {};
  messages?: Observable<Message[]>;

  messageForm = this.createMessage({
    message: '',
    date: new Date(),
    id: '',
  });

  createMessage(model: Message) {
    let formGroup = this.fb.group(model);
    formGroup
      .get('message')
      ?.setValidators([Validators.required, Validators.minLength(1)]);
    return formGroup;
  }

  ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userService.getUser(user.uid).subscribe((userData) => {
          this.currentUser = userData;
          this.isAdmin = this.currentUser?.isAdmin || false;
          this.loadMessages();
        });
      } else {
        this.currentUser = null;
        this.isAdmin = false;
      }
    });
  }

  loadMessages() {
    this.dataSource = this.messageService.getMessages();
  }
  deleteMessage(message: any) {
    if (this.isAdmin) {
      if (confirm('Biztosan törölni szeretnéd ezt a kommentet?')) {
        this.messageService
          .delete(message.id)
          .then(() => {})
          .catch((error) => {
            console.log('Hiba történt a komment törlése közben!');
          });
      }
    } else {
      console.log('Nincs jogosultságod a komment törléséhez!');
    }
  }

  editMessage(message: any) {
    if (this.isAdmin) {
      this.messageForm.patchValue({
        message: message.message,
        date: message.date,
        id: message.id,
      });
    } else {
      console.log('Nincs jogosultságod a komment szerkesztéséhez!');
    }
  }

  saveChanges() {
    if (this.isAdmin && this.messageForm.valid) {
      const formValue = this.messageForm.value;
      formValue.date = new Date();
      this.messageService
        .update(formValue as Message)
        .then(() => {
          this.messageForm.reset({
            message: '',
            date: new Date(),
          });
        })
        .catch((error) => {
          console.error('Hiba történt a komment frissítése közben:', error);
        });
    } else {
      console.error('Nincs jogosultságod a komment frissítéséhez!');
    }
  }

  addMessage() {
    if (this.isAdmin) {
      const formValue = this.messageForm.value;
      formValue.date = new Date();
      this.messageService
        .create(formValue as Message)
        .then(() => {
          this.dataSource = this.messageService.getMessages();
          this.messageForm.reset({
            message: '',
            date: new Date(),
          });
        })
        .catch((error) => {
          console.error('Hiba történt a komment létrehozása közben:', error);
        });
    } else {
      console.error('Nincs jogosultságod a komment létrehozásához!');
    }
  }
}
