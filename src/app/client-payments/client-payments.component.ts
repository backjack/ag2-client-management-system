import { Component, OnInit, Injectable } from '@angular/core';
import { ClientPaymentsService } from './client-payments.service';

@Component({
  selector: 'app-client-payments',
  templateUrl: './client-payments.component.html',
  styleUrls: ['./client-payments.component.css']
})
export class ClientPaymentsComponent implements OnInit {

  receivedPayment:number;
  totalPayment:number;
  pendingPayment:number;
  totalInvoice:number;
  totalLateInvoice:number;

  constructor(private clientPaymentService:ClientPaymentsService) { 
     this.receivedPayment = 1800;  
     this.totalPayment =35000;
     this.setPendingPayments(this.totalPayment,this.receivedPayment);
     this.totalInvoice =100;
     this.totalLateInvoice = 5;
  }

  getPaymentInfo(clientId):void {

    var me = this;
     this.clientPaymentService.getPaymentInfo(clientId).subscribe(function(result){
         me.totalPayment = result['totalAmount']== null?0:result['totalAmount'];
         me.receivedPayment = result['paidAmount'] == null?0:result['paidAmount'];
         me.totalInvoice = result['totalInvoice']== null?0:result['totalInvoice'];
         me.setPendingPayments(me.totalPayment,me.receivedPayment);
     });
  }

  setPendingPayments(totalPayment:number,receivedPayment:number) {
      this.pendingPayment = totalPayment - receivedPayment;
  }

  ngOnInit() {
  }

}
