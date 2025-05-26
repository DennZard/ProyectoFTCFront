import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserLogin } from '../../core/interfaces/UserLogin';
import { User } from '../../core/models/User';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  logInUser: FormGroup;
  userId: any;
  user: User;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.logInUser = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  registerUserBtn($event: Event) {
    this.router.navigateByUrl('main/register');
  }

  logInUserBtn($event: MouseEvent) {
    $event.preventDefault();
    console.log(this.logInUser);
    if (this.validateCredentials(this.logInUser.value)) {
      this.userService.login(this.logInUser.value).subscribe(
        (data) => {
          sessionStorage.setItem('user', JSON.stringify(data));
          this.router.navigateByUrl('/main');
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

  validateCredentials({ email, password }: UserLogin) {
    if (!email || !password) {
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
