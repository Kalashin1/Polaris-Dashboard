import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// owl carousel
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavComponent } from './landing-page/nav/nav.component';
import { LandingTextComponent } from './landing-page/landing-text/landing-text.component';
import { SocialLinksComponent } from './landing-page/social-links/social-links.component';
import { BannerComponent } from './banner/banner.component';
import { ContactComponent } from './contact/contact.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TopCarouselComponent } from './home-page/top-carousel/top-carousel.component';
import { CarouselTextComponent } from './home-page/carousel-text/carousel-text.component';
import { HomeServicesComponent } from './home-page/home-services/home-services.component';


import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { ContactService } from './services/contact-service.service';
import { FoodService } from './services/food.service'

import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { CartComponent } from './dashboard/cart/cart.component';
import { DayfoodComponent } from './home-page/dayfood/dayfood.component';
import { DiscountFoodComponent } from './home-page/discount-food/discount-food.component';
import { OurChefsComponent } from './home-page/our-chefs/our-chefs.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { SidebarComponent } from './foodlist/sidebar/sidebar.component';
import { FooditemComponent } from './foodlist/fooditem/fooditem.component';
import { NewFoodComponent } from './foodlist/new-food/new-food.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { CartItemComponent } from './dashboard/cart/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    LandingPageComponent,
    NavComponent,
    LandingTextComponent,
    SocialLinksComponent,
    BannerComponent,
    ContactComponent,
    HomePageComponent,
    TopCarouselComponent,
    CarouselTextComponent,
    HomeServicesComponent,
    DashboardComponent,
    OrdersComponent,
    CartComponent,
    DayfoodComponent,
    DiscountFoodComponent,
    OurChefsComponent,
    FoodlistComponent,
    SidebarComponent,
    FooditemComponent,
    NewFoodComponent,
    FoodDetailsComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule
  ],
  providers: [UserService, ContactService, AuthService, FoodService],
  bootstrap: [AppComponent, HomePageComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
