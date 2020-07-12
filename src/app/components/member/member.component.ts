import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/models/member';
import { jsonServer } from 'src/environments/environment';
import { imagePath } from '../../../environments/environment.prod';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent implements OnInit {
  @Input() members: Member[];
  imagePath = imagePath;

  constructor() {}

  ngOnInit(): void {}
}
