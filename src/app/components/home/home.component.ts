import { Component, OnInit, HostListener } from '@angular/core';
import { jsonServer } from '../../../environments/environment';
import { DishService } from '../../services/dish.service';
import { Dish } from 'src/app/models/dish';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  jsonServer = jsonServer;
  featuredDish: Dish;
  errorMessage: string;

  constructor(private dishService: DishService) {}

  ngOnInit(): void {
    this.dishService.fetchFeaturedDish().subscribe(
      (dish) => (this.featuredDish = dish),
      (error) => (this.errorMessage = error)
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log(event.target.innerWidth);
    console.log(document);
    console.log(window.innerWidth);
  }
}
