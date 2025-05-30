import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  standalone: false,
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent implements OnInit{
  ngOnInit(): void {
    console.log("Paso por el authLayout")
  }


}
