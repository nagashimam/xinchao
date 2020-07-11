import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/member';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  members: Member[];
  errorMessage: string;

  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    this.memberService.fetchMembers().subscribe(
      (members) => (this.members = members),
      (errorMessage) => (this.errorMessage = errorMessage)
    );
  }
}
