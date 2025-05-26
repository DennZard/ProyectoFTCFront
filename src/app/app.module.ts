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

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AuthModule,
    PagesModule,
    BrowserAnimationsModule,
    CardModule,
    AuthLayoutModule,
    MainModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
