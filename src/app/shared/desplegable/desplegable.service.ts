import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DesplegableService {
  private _isSidebarOpen = new BehaviorSubject<boolean>(false);
  public isSidebarOpen$ = this._isSidebarOpen.asObservable();

  toggleSidebar() {
    console.log('Sidebar state set to:', "toggle");
    this._isSidebarOpen.next(!this._isSidebarOpen.value);
  }

  setSidebarState(state: boolean) {
    console.log('Sidebar state set to:', state);
    this._isSidebarOpen.next(state);
  }

  getSidebarState() {
    console.log('Sidebar state set to:', 'a');
    return this._isSidebarOpen.value;
  }

  constructor() {
    console.log('SidebarService creado');
  }
}
