import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-create-company',
  standalone: false,
  templateUrl: './create-company.component.html',
  styleUrl: './create-company.component.css'
})
export class CreateCompanyComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    const logged = sessionStorage.getItem('user');
    console.log(logged);
    if (!logged) {
      this.router.navigateByUrl("main/login")
    }
  }

}
