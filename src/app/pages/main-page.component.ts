import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent implements OnInit {
  usuario: any;
  showSidebar = true;

  constructor(private router: Router) {}



  ngOnInit(): void {
    this.usuario = sessionStorage.getItem('user');
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const hiddenRoutes = [
          '/main/login',
          '/main/register',
          'main/no-authorized',
        ];
        this.showSidebar = !hiddenRoutes.includes(event.urlAfterRedirects);
      });
  }
}
