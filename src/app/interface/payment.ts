export interface IPayment {
   payId:number;
   paidAmount:number;
   payDate:Date;
   details:string;
   invoiceIds:string[];
}