import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactComponent } from './contact/contact.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { CartComponent } from './dashboard/cart/cart.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { FoodDetailsComponent } from './food-details/food-details.component'

import { AuthGuard } from './guards/auth.guard'
import { AuthService } from './services/auth.service'
import { FoodService } from './services/food.service'
import { ContactService } from './services/contact-service.service'

const routes: Routes = [
  { path : '', redirectTo : 'home', pathMatch : 'full'},
  { path : 'login',
    component : LoginComponent },
  { path : 'signup',
    component : SignupComponent},
  { path : 'landing',
    component : LandingPageComponent },
  { path : 'contact',
    component : ContactComponent, canActivate : [AuthGuard]},
  { path : 'home',
    component : HomePageComponent},
  { path : 'meals',
    component : FoodlistComponent},
    { path : 'food/:id', 
      component : FoodDetailsComponent},
  { path : 'dashboard',
    component : DashboardComponent, children : [
      { path : 'orders', component : OrdersComponent}
    ]},
    { path : 'cart', component : CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard, ContactService, AuthService, FoodService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
