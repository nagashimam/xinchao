import { Component, OnInit } from '@angular/core';
import { jsonServer } from 'src/environments/environment';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent implements OnInit {
  jsonServer = jsonServer;
  constructor() {}

  ngOnInit(): void {}
}
