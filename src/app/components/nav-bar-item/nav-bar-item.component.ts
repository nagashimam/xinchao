import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar-item',
  templateUrl: './nav-bar-item.component.html',
  styleUrls: ['./nav-bar-item.component.scss'],
})
export class NavBarItemComponent implements OnInit {
  @Input() buttonText: string;
  @Input() buttonColor: string;

  constructor() {}

  ngOnInit(): void {}
}
