import { Component, OnInit, Input } from '@angular/core';
import { Dish } from 'src/app/models/dish';
import { jsonServer } from 'src/environments/environment';

@Component({
  selector: 'app-dish-summary-card',
  templateUrl: './dish-summary-card.component.html',
  styleUrls: ['./dish-summary-card.component.scss'],
})
export class DishSummaryCardComponent implements OnInit {
  @Input() dishes: Dish[];
  jsonServer = jsonServer;
  constructor() {}

  ngOnInit(): void {}
}
