import { Component, OnInit } from '@angular/core';
import { routes } from '../../constants/routes';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-bottom-bar-nav',
  templateUrl: './bottom-bar-nav.component.html',
  styleUrls: ['./bottom-bar-nav.component.scss'],
})
export class BottomBarNavComponent implements OnInit {
  paths = routes.map((route) => route.path).filter((route) => route !== '**');
  activeLink;
  activeLinkIndex = 0;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      const isNavigationEnd = event instanceof NavigationEnd;
      if (!isNavigationEnd) {
        return;
      }

      const currentRoute = (event as NavigationEnd).url.slice(1);
      const isCurrentRoute = (route: string) => route === currentRoute;
      this.activeLinkIndex = this.paths.includes(currentRoute)
        ? this.paths.indexOf(this.paths.find(isCurrentRoute))
        : 0;
    });
  }
}
