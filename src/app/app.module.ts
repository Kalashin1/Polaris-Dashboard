import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ChartsModule } from 'ng2-charts'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainComponent } from './components/main/main.component';
import { StatsComponent } from './components/contents/stats/stats.component';
import { PaymentListComponent } from './components/contents/payment-list/payment-list.component';
import { PaymentItemComponent } from './components/contents/payment-item/payment-item.component';
import { FormComponent } from './components/contents/form/form.component';
import { ProductService } from './services/product.service';
import { GraphComponent } from './components/contents/graph/graph.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    StatsComponent,
    PaymentListComponent,
    PaymentItemComponent,
    FormComponent,
    GraphComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }


