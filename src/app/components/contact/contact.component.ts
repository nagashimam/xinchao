import { Component, OnInit } from '@angular/core';
import { jsonServer, imagePath } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contacts = [
    {
      icon: imagePath('/images/phone.svg'),
      value: '0120-XXX-0000',
    },
    {
      icon: imagePath('/images/facebook.svg'),
      value: 'https://facebook/xinchao/example.com',
    },
    {
      icon: imagePath('/images/email.svg'),
      value: 'xinchao@example.com',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    console.log(this.contacts[0].icon);
  }
}
