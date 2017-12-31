import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { DatagridComponent } from './datagrid/datagrid.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientInvoiceComponent } from './client-dashboard/client-invoice/client-invoice.component';
import { ClientPaymentsComponent } from './client-payments/client-payments.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import {SelectModule} from 'ng2-select';
import { ClientInfoFormComponent } from './client-info-form/client-info-form.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule}  from '@angular/platform-browser/animations';
import {BusyModule,BusyConfig} from 'angular2-busy';


@NgModule({
  declarations: [
    AppComponent,
    DatagridComponent,
    ClientProfileComponent,
    ClientDashboardComponent,
    ClientInvoiceComponent,
    ClientPaymentsComponent,
    PaymentFormComponent,
    ClientInfoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SelectModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BusyModule
  ],
  providers: [],
  bootstrap: [ClientDashboardComponent]
})
export class AppModule { }
