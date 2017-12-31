import { Component } from '@angular/core';
import {IPayment} from '../interface/payment';
import {PaymentFormComponent} from '../payment-form/payment-form.component';
import { InvoiceService } from '../client-dashboard/client-invoice/client-invoice.service';


@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css'],
})
export class DatagridComponent  {

  title:string;
  payments:IPayment[];

  constructor() {

    this.title ="Payment Details"; 
    this.payments =[{
      payId:1,
      paidAmount:14000,
      payDate:new Date("2015-03-10"),
      details:"Dummy cheque",
      invoiceIds:["AFP/INV/30","AFP/INV/31"]
    },{
      payId:2,
      paidAmount:24000,
      payDate:new Date("2015-04-11"),
      details:"Dummy cheque",
      invoiceIds:["AFP/INV/30","AFP/INV/31"]
    },{
      payId:3,
      paidAmount:54000,
      payDate:new Date("2015-02-26"),
      details:"Dummy cheque",
      invoiceIds:["AFP/INV/30","AFP/INV/31"]
    },{
      payId:4,
      paidAmount:3440,
      payDate:new Date("2015-05-02"),
      details:"Dummy cheque",
      invoiceIds:["AFP/INV/30","AFP/INV/31"]
    }]
}

deletePayment(id):void{
 // this.payments.({paidAmount:id});
 alert(id);
}

}
