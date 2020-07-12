import { Component, OnInit, Input } from '@angular/core';
import { Dish } from 'src/app/models/dish';
import { jsonServer } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { DishDetailComponent } from '../dish-detail/dish-detail.component';

@Component({
  selector: 'app-dish-summary-card',
  templateUrl: './dish-summary-card.component.html',
  styleUrls: ['./dish-summary-card.component.scss'],
})
export class DishSummaryCardComponent implements OnInit {
  @Input() dishes: Dish[];
  jsonServer = jsonServer;
  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(dish: Dish) {
    this.matDialog.open(DishDetailComponent, {
      data: dish,
      panelClass: 'dialog-conteiner',
    });
  }
}
