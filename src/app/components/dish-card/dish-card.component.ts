import { Component, OnInit, Input } from '@angular/core';
import { Dish } from 'src/app/models/dish';
import { jsonServer } from '../../../environments/environment';
import { imagePath } from '../../../environments/environment.prod';

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.scss'],
})
export class DishCardComponent implements OnInit {
  @Input() dish: Dish;
  jsonServer = jsonServer;
  imagePath = imagePath;
  constructor() {}

  ngOnInit(): void {
    console.log(this.dish);
  }
}
