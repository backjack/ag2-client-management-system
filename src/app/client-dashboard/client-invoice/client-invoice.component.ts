import { Component, OnInit,OnChanges } from '@angular/core';
import { IInvoice } from '../../interface/invoice';
import { InvoiceService } from './client-invoice.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-client-invoice',
  templateUrl: './client-invoice.component.html',
  styleUrls: ['./client-invoice.component.css']
})
export class ClientInvoiceComponent implements OnInit,OnChanges {

   title:string = "Invoice";
   //wrapperClass:string="wrapperClass";
  // minDuration:number =90000;
   busy: Subscription;
   invoices:IInvoice[] =[];
   filteredInvoices : IInvoice[];
   _filteredString:string;

   get filteredString():string {
     return this._filteredString;
   }

   set filteredString(value:string) {
     this._filteredString = value;
     this.filteredInvoices = value? this.filterInvoices(value):this.invoices;
   }
   
  filterInvoices(filterBy:string):IInvoice[] {
       
    var filteredInvoices:IInvoice[] = new Array();
      for(let i=0; i<this.invoices.length; i++){
         if(this.invoices[i].id.indexOf(filterBy) !== -1) {
          filteredInvoices.push(this.invoices[i]);
         }
      }
       return filteredInvoices;
   }

   constructor(private invoiceService:InvoiceService) {
 
    }
    
   ngOnInit():void {
    this.getInvoices(7);
   }

   getInvoices(id:number):void {
    
    this.filteredString="";
    var me = this;
    this.busy = this.invoiceService.getInvoices(id).subscribe(function(data){
          var t = new Array();
          for(var i=0;i<data.length;i++) {
            var inv = {id:data[i]['invoiceId'],amount:data[i]['totalAmt'],creationDate:data[i]['invoiceDate']};
            t.push(inv);
          }
          me.invoices = t;
          me.filteredInvoices = me.invoices;
    });
   }

   ngOnChanges() :void {
    this.filteredInvoices = this.invoices;
    console.log("hiii");
   }

 }
