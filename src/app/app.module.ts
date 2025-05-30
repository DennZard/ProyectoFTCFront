import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { provideHttpClient } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { AuthLayoutModule } from './layouts/auth/auth-layout.module';
import { MainModule } from './layouts/main/main.module';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    AuthModule,
    PagesModule,
    CardModule,
    AuthLayoutModule,
    MainModule,
    DialogModule,
    ButtonModule,
    ConfirmDialogModule,
  ],
  providers: [provideHttpClient(), ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
