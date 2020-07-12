import { Component, OnInit, Input } from '@angular/core';
import { Dish } from 'src/app/models/dish';
import { jsonServer } from '../../../environments/environment';

@Component({
  selector: 'app-menu-summary',
  templateUrl: './menu-summary.component.html',
  styleUrls: ['./menu-summary.component.scss'],
})
export class MenuSummaryComponent implements OnInit {
  @Input() dishes: Dish[];
  jsonServer = jsonServer;
  constructor() {}

  ngOnInit(): void {}
}
