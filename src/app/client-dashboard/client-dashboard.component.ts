import { Component, OnInit,Output,EventEmitter,ViewChild} from '@angular/core';
import { InvoiceService } from './client-invoice/client-invoice.service';
import { ClientProfileService } from '../client-profile/client-profile.service';
import { ClientPaymentsService } from '../client-payments/client-payments.service';
import { ClientInvoiceComponent } from './client-invoice/client-invoice.component';
import { ClientProfileComponent } from '../client-profile/client-profile.component';
import { ClientPaymentsComponent } from '../client-payments/client-payments.component';


@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css'],
  providers:[InvoiceService,ClientProfileService,ClientPaymentsService]
})
export class ClientDashboardComponent implements OnInit {

  private items:Array<any> = [];

 value:any = {};
 _disabledV:string = '0';
 disabled:boolean = false;

 @ViewChild(ClientInvoiceComponent) clientInvoice: ClientInvoiceComponent;
 @ViewChild(ClientProfileComponent) clientProfile: ClientProfileComponent;
 @ViewChild(ClientPaymentsComponent) clientPayments: ClientPaymentsComponent;

 get disabledV():string {
  return this._disabledV;
}

 set disabledV(value:string) {
  this._disabledV = value;
  this.disabled = this._disabledV === '1';
}

public selected(value:any):void {
   console.log('Selected value is: ', value);
   this.clientInvoice.getInvoices(parseInt(value['id']));
   this.clientProfile.getClientInfo(parseInt(value['id']));
   this.clientPayments.getPaymentInfo(parseInt(value['id']));
}

public removed(value:any):void {
  console.log('Removed value is: ', value);
}

public typed(value:any):void {
  console.log('New search input: ', value);
}

public refreshValue(value:any):void {
  this.value = value;
}
  constructor(private invoiceService:InvoiceService) { 

  }

  ngOnInit() {

    var me = this;
    this.invoiceService.getAllClients().subscribe(function(data){
      var dumItems = new Array();
       for(var i=0;i<data.length;i++) {
         
         var obj = {id:data[i]['clientId'],text:data[i]['clientName']};
         dumItems.push(obj);
       }
       console.log(dumItems);
       me.items = dumItems;
       me.value = dumItems[0];
    });
  }

}
