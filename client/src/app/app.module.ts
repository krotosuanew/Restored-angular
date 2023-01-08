import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MaterialModule} from "./modules/material.module";
import { StartPageComponent } from './start-page/start-page.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule, HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {AuthService} from "../services/authService/auth.service";
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CitiesListComponent } from './admin-page/cities-list/cities-list.component';
import { OrdersListComponent } from './admin-page/orders-list/orders-list.component';
import { MastersListComponent } from './admin-page/masters-list/masters-list.component';
import { ClocksListComponent } from './admin-page/clocks-list/clocks-list.component';
import { UsersListComponent } from './admin-page/users-list/users-list.component';
import {CityService} from "../services/citySevice/city.service";
import { ModalCityComponent } from './admin-page/cities-list/modal-city/modal-city.component';
import { ModalClocksComponent } from './admin-page/clocks-list/modal-clocks/modal-clocks.component';
import { ModalMastersComponent } from './admin-page/masters-list/modal-masters/modal-masters.component';
import { ModalUsersComponent } from './admin-page/users-list/modal-users/modal-users.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { CongratulationPageComponent } from './congratulation-page/congratulation-page.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StartPageComponent,
    LoginComponent,
    AdminPageComponent,
    CitiesListComponent,
    OrdersListComponent,
    MastersListComponent,
    ClocksListComponent,
    UsersListComponent,
    ModalCityComponent,
    ModalClocksComponent,
    ModalMastersComponent,
    ModalUsersComponent,
    RegistrationPageComponent,
    CongratulationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
