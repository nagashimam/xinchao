import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Dish } from 'src/app/models/dish';
import { Comment } from '../../models/comment';
import { ReviewService } from '../../services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent implements OnInit {
  // 1つのFormGroupをStepperで使うこともできるが、やや複雑になるので3つに分ける
  authorForm: FormGroup;
  starForm: FormGroup;
  commentForm: FormGroup;

  isSendingReview = false;

  dish: Dish;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<ReviewComponent>,
    private reviewService: ReviewService,
    @Inject(MAT_DIALOG_DATA) public injectedDish: Dish
  ) {
    this.dish = injectedDish;
  }

  ngOnInit(): void {
    this.authorForm = this.formBuilder.group({
      author: ['', Validators.required],
    });
    this.starForm = this.formBuilder.group({
      star: ['', Validators.required],
    });
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.required],
    });
  }

  onSubmit() {
    this.isSendingReview = true;

    const comment = new Comment();
    comment.author = this.authorForm.value.author;
    comment.star = this.starForm.value.star;
    comment.comment = this.commentForm.value.comment;

    this.dish.comments.push(comment);

    this.reviewService.sendReview(this.dish).subscribe(
      (_) => this.matDialogRef.close(),
      (error) => (this.errorMessage = error)
    );
  }
}
