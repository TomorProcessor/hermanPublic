import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Comment } from 'src/shared/models/Comment';
import { CommentService } from 'src/shared/services/comment.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/shared/dialog/dialog.component';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss'],
})
export class GuestComponent implements OnInit {
  constructor(
    private commentService: CommentService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {}

  commentsPerPage = 5;
  currentPage = 1;

  dataSource = this.commentService.getComments();
  comments: Comment[] = [];
  commentsForm = this.createForm({
    email: '',
    name: '',
    comment: '',
    date: new Date(),
    id: '',
  });

  openDialog(message: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      data: { message: message },
    });
  }

  get paginatedComments() {
    const startIndex = (this.currentPage - 1) * this.commentsPerPage;
    const endIndex = startIndex + this.commentsPerPage;
    return this.comments.slice(startIndex, endIndex);
  }

  get pages() {
    const pageCount = Math.ceil(this.comments.length / this.commentsPerPage);
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    const pageCount = Math.ceil(this.comments.length / this.commentsPerPage);
    if (this.currentPage < pageCount) {
      this.currentPage++;
    }
  }

  createForm(model: Comment) {
    return this.fb.group({
      email: [model.email, [Validators.required, Validators.email]],
      name: [model.name, Validators.required],
      comment: [model.comment, [Validators.required, Validators.minLength(1)]],
      date: [model.date],
      id: [model.id],
    });
  }

  addComment() {
    if (this.commentsForm.get('email')?.hasError('email')) {
      this.openDialog('Az email cím formátuma nem megfelelő!');
      return;
    }

    if (
      this.commentsForm.get('email')?.value === '' ||
      this.commentsForm.get('name')?.value === '' ||
      this.commentsForm.get('comment')?.value === ''
    ) {
      this.openDialog('Nem lehet üres mező!');
      return;
    }
    if (this.commentsForm.valid) {
      const formValue = this.commentsForm.value;
      formValue.date = new Date();

      this.commentService
        .create(formValue as Comment)
        .then(() => {
          this.commentsForm.reset({
            comment: '',
            date: new Date(),
            name: '',
            email: '',
            id: '',
          });
        })
        .catch((error) => {
          console.error('Hiba történt a komment létrehozása közben:', error);
        });
    } else {
      this.openDialog('Az űrlap nem érvényes');
    }
  }

  ngOnInit() {
    this.commentService.getComments().subscribe((comments) => {
      this.comments = comments;
    });
  }
}
