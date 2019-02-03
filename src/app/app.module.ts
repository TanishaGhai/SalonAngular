import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CustomersComponent } from './Customers/customers.component';
import {ConvertToPhone} from './shared/ConvertToPhone';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerDetailsComponent } from './Customers/customer-details.component';
import { BillsComponent } from './bills/bills.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CustomersComponent,
    HomeComponent,
    ConvertToPhone,
    CustomerDetailsComponent,
    BillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'customers', component: CustomersComponent},
      {path: 'customers/:id', component: CustomerDetailsComponent},
      {path: 'Home', component: HomeComponent},
      {path: '', redirectTo: 'Home', pathMatch: 'full'},
      {path: '**', redirectTo: 'Home', pathMatch: 'full'}
    ], { useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
