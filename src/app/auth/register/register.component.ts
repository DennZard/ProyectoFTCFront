import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  userRegisterForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  registerUser() {
    if (this.userRegisterForm.valid) {
      this.userService.register(this.userRegisterForm.value).subscribe(
        (resp) => {
          this.router.navigateByUrl('main/login');
        },
        (err) => {
          Swal.fire(
            'Usuario Existente',
            'Ya existe un usuario con ese email',
            'error'
          );
        }
      );
    } else {
      Swal.fire(
        'Formulario Invalido',
        'Complete el formulario y vuelva a intentarlo ',
        'error'
      );
    }
  }

  passWordEqual(pass1: String, pass2: String) {
    return (formGroup: FormGroup) => {
      const password = formGroup.get('password');
      const password2 = formGroup.get('password2');

      if (password.value == password2.value) {
        password.setErrors(null);
        password2.setErrors(null);
      } else {
        password.setErrors({ noEsIgual: true });
        password2.setErrors({ noEsIgual: true });
      }
    };
  }

  ngOnInit(): void {
    this.userRegisterForm = this.fb.group(
      {
        username: ['Pinocho', [Validators.required]],
        email: ['pinocho@gmail.com', [Validators.required, Validators.email]],
        password: ['123', [Validators.required]],
        password2: ['123', [Validators.required]],
        phone: ["123456789", [Validators.required]]
      },
      {
        validators: this.passWordEqual('password', 'password2'),
      }
    )
  }

  isInvalid(item: string) {
    return this.userRegisterForm.get(item).valid;
  }

  logInUserBtn() {
    this.router.navigateByUrl('main/login');
  }
}
