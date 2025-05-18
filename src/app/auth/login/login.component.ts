import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../../core/models/User';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  logInUser: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.logInUser = this.fb.group({
      Username: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required]],
    });
  }

  registerUserBtn($event: Event) {
    this.router.navigateByUrl('main/register');
  }

  logInUserBtn($event: MouseEvent) {
    $event.preventDefault();
    if (this.validateCredentials(this.logInUser.value)) {
      this.userService.login(this.logInUser.value).subscribe(
        (resp) => {
          this.router.navigateByUrl('main/libro');
        },
        (err) => {
          Swal.fire(
            'Error al iniciar sesion',
            'El usuario o la contraseña son incorrectos',
            'error'
          );
        }
      );
    }
  }

  validateCredentials({email, password, username }: User) {
    console.log(this.logInUser.get('Password').value);
    console.log(this.logInUser.get('Email').value);
    console.log(this.logInUser.get('Username').value);
    if (!email || !password || !username) {
      Swal.fire(
        'Credenciales invalidas',
        'Debes introducir valores en todos campos',
        'warning'
      );
      return false;
    }
    if (!this.logInUser.get('email').valid) {
      Swal.fire(
        'Email invalido',
        'Debes introducir un email valido',
        'warning'
      );
      return false;
    }
    return true;
  }
}
