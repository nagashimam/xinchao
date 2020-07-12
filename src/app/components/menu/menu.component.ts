import { Component, OnInit } from '@angular/core';
import { Dish } from 'src/app/models/dish';
import { DishService } from '../../services/dish.service';
import { Member } from '../../models/member';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  // 画面を開いたときに1度だけ取得するので、画面を開いている間にメニューの追加があっても画面に反映されない
  // 頻繁にメニューの更新はない前提
  allDishes: Dish[];
  members: Member[];
  currentDish: Dish;
  errorMessage: string;

  constructor(
    private dishService: DishService,
    private memberService: MemberService
  ) {}

  ngOnInit(): void {
    this.dishService.fetchDishes().subscribe(
      (dishes) => (this.allDishes = dishes),
      (errorMessage) => (this.errorMessage = errorMessage)
    );

    this.memberService.fetchMembers().subscribe(
      (members) => (this.members = members),
      (errorMessage) => (this.errorMessage = errorMessage)
    );
  }
}
