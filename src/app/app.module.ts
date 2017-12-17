import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AgGridModule} from "ag-grid-angular/main";
import { AppComponent } from './app.component';
import { DatagridComponent } from './datagrid/datagrid.component';


@NgModule({
  declarations: [
    AppComponent,
    DatagridComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.forRoot()
  ],
  providers: [],
  bootstrap: [DatagridComponent]
})
export class AppModule { }
