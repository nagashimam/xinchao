import { Component, OnInit } from '@angular/core';
import { jsonServer } from 'src/environments/environment';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  jsonServer = jsonServer;
  constructor() {}

  ngOnInit(): void {}
}
