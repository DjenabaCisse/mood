import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WeatherComponent } from './weather/weather.component';
import { RestapiComponent } from './restapi/restapi.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { ApiService } from './api/api.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent, WelcomeComponent, WeatherComponent, RestapiComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule, HttpClientModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
