import { Component, OnInit } from '@angular/core';
import { Dish } from 'src/app/models/dish';
import { DishService } from '../../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  // 画面を開いたときに1度だけ取得するので、画面を開いている間にメニューの追加があっても画面に反映されない
  // 頻繁にメニューの更新はない前提
  allDishes: Dish[];
  currentDish: Dish;
  errorMessage: string;

  constructor(private dishService: DishService) {}

  ngOnInit(): void {
    this.dishService.fetchDishes().subscribe(
      (dishes) => (this.allDishes = dishes),
      (errorMessage) => (this.errorMessage = errorMessage)
    );
  }
}
