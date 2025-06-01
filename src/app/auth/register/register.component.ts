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

  passWordEqual(password: string, password2: string) {
    return (formGroup: FormGroup) => {
      const pass = formGroup.get(password);
      const pass2 = formGroup.get(password2);

      if (!pass || !pass2) return;

      if (pass.value === pass2.value) {
        pass2.setErrors(null);
      } else {
        pass2.setErrors({ noEsIgual: true });
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
        phone: ['123456789', [Validators.required]],
      },
      {
        validators: this.passWordEqual('password', 'password2'),
      }
    );
  }

  isInvalid(controlName: string): boolean {
    const control = this.userRegisterForm.get(controlName);
    return control?.invalid && (control.dirty || control.touched);
  }

  logInUserBtn() {
    this.router.navigateByUrl('main/login');
  }
}
