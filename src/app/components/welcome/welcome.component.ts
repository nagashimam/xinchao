import { Component, OnInit } from '@angular/core';
import { jsonServer } from 'src/environments/environment';
import { imagePath } from '../../../environments/environment';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  imagePath = imagePath;
  constructor() {}

  ngOnInit(): void {}
}
