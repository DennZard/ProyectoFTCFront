import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../core/models/User';

@Injectable({ providedIn: 'root' })
export class UsuarioSessionService {
  private usuarioSubject: BehaviorSubject<User | null>;

  constructor() {
    const userData = sessionStorage.getItem('user');
    const parsed = userData ? JSON.parse(userData)?.data?.user : null;
    this.usuarioSubject = new BehaviorSubject<User | null>(parsed);
  }

  getUsuario(): Observable<User | null> {
    return this.usuarioSubject.asObservable();
  }

  getUsuarioActual(): User | null {
    return this.usuarioSubject.getValue();
  }

  setUsuario(usuario: User): void {
    this.usuarioSubject.next(usuario);
    const current = JSON.parse(sessionStorage.getItem('user') || '{}');
    if (current?.data) {
      current.data.user = usuario;
      sessionStorage.setItem('user', JSON.stringify(current));
    }
  }

  clearUsuario(): void {
    this.usuarioSubject.next(null);
    sessionStorage.removeItem('user');
  }
}
