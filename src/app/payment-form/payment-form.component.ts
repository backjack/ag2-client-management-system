import { Component, OnInit } from '@angular/core';
import {IPayment} from '../interface/payment';

@Component({
  selector: 'app-panel-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent {
  public title:string;
  payment:IPayment;
  public visible = false;
  public visibleAnimate = false;

  constructor() {
    this.title = "Edit Payment";
    this.payment = {
      payId:1,
      paidAmount:14000,
      payDate:new Date("2015-03-10"),
      details:"Dummy cheque",
      invoiceIds:["AFP/INV/30","AFP/INV/31"]
    }
  }

  public show(payment): void {
 
    this.payment = payment;
    this.visible = true;
     setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
   
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }
}

