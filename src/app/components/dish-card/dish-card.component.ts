import { Component, OnInit, Input } from '@angular/core';
import { Dish } from 'src/app/models/dish';
import { jsonServer } from '../../../environments/environment';

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.scss'],
})
export class DishCardComponent implements OnInit {
  @Input() dish: Dish;
  jsonServer = jsonServer;
  constructor() {}

  ngOnInit(): void {
    console.log(this.dish);
  }
}
