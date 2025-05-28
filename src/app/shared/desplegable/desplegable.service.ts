import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DesplegableService {
  private _isSidebarOpen = new BehaviorSubject<boolean>(false);
  public isSidebarOpen$ = this._isSidebarOpen.asObservable();

  toggleSidebar() {
    this._isSidebarOpen.next(!this._isSidebarOpen.value);
  }

  setSidebarState(state: boolean) {
    this._isSidebarOpen.next(state);
  }

  getSidebarState() {
    return this._isSidebarOpen.value;
  }

  constructor() {
    console.log('SidebarService creado');
  }
}
