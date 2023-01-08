import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import {StartPageComponent} from "./start-page/start-page.component";
import {LoginComponent} from "./login/login.component";
import {AdminPageComponent} from "./admin-page/admin-page.component";
import {CitiesListComponent} from "./admin-page/cities-list/cities-list.component";
import {ClocksListComponent} from "./admin-page/clocks-list/clocks-list.component";
import {MastersListComponent} from "./admin-page/masters-list/masters-list.component";
import {UsersListComponent} from "./admin-page/users-list/users-list.component";
import {OrdersListComponent} from "./admin-page/orders-list/orders-list.component";
import {RegistrationPageComponent} from "./registration-page/registration-page.component";
import {CongratulationPageComponent} from "./congratulation-page/congratulation-page.component";

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationPageComponent },
  { path: 'congratulation', component: CongratulationPageComponent },
  { path: 'admin', component: AdminPageComponent,children:[
      { path: 'orders', component: OrdersListComponent },
      { path: 'cities', component: CitiesListComponent },
      { path: 'masters', component: MastersListComponent },
      { path: 'clocks', component: ClocksListComponent },
      { path: 'users', component: UsersListComponent },
    ] },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
