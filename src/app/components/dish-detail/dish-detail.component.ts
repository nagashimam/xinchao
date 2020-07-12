import { Component, OnInit, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialog,
} from '@angular/material/dialog';
import { Dish } from '../../models/dish';
import { jsonServer, imagePath } from '../../../environments/environment';
import { ReviewComponent } from '../review/review.component';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss'],
})
export class DishDetailComponent implements OnInit {
  dish: Dish;
  jsonServer = jsonServer;
  imagePath = imagePath;
  constructor(
    private matDialogRef: MatDialogRef<DishDetailComponent>,
    private matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public injectedDish: Dish
  ) {
    this.dish = injectedDish;
  }

  ngOnInit(): void {}

  openReviewComponent() {
    this.matDialogRef.close();
    this.matDialog.open(ReviewComponent, {
      data: this.injectedDish,
      panelClass: 'dialog-conteiner',
    });
  }
}
