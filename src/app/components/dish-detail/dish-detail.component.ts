import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Dish } from '../../models/dish';
import { jsonServer } from '../../../environments/environment';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss'],
})
export class DishDetailComponent implements OnInit {
  dish: Dish;
  jsonServer = jsonServer;
  constructor(@Inject(MAT_DIALOG_DATA) public injectedDish: Dish) {
    this.dish = injectedDish;
  }

  ngOnInit(): void {}
}
