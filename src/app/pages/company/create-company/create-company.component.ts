import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    if (logged != "1") {
      this.router.navigateByUrl("main/login")
    }
  }

}
