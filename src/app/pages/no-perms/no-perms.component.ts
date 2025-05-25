import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-perms',
  standalone: false,
  templateUrl: './no-perms.component.html',
  styleUrl: './no-perms.component.css',
})
export class NoPermsComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }
}
