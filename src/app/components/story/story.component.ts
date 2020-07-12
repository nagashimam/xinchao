import { Component, OnInit } from '@angular/core';
import { imagePath } from '../../../environments/environment';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent implements OnInit {
  imagePath = imagePath;
  constructor() {}

  ngOnInit(): void {}
}
