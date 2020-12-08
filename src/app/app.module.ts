import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// owl carousel
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgHttpLoaderModule } from 'ng-http-loader'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { BannerComponent } from './components/banner/banner.component';
import { ChannelListComponent } from './pages/channel-list/channel-list.component';
import { JoinSuccessComponent } from './pages/join-success/join-success.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'

import { NavigationService } from './services/navigation.service';
import { AuthService } from './services/auth.service'

import { AuthGuard } from './guard/auth.guard'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    BannerComponent,
    ChannelListComponent,
    JoinSuccessComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule,
    NgHttpLoaderModule
  ],
  providers: [AuthGuard, NavigationService, AuthService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
