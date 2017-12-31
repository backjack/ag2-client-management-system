
import { Injectable } from "@angular/core";
import { IInvoice } from "../../interface/invoice";
import { HttpClient,HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';



@Injectable()
export class InvoiceService {

    private httpUrl:string = "http://localhost:3000/default/hello";
    private allClientURL:string = "http://localhost:3000/default/clients";
    constructor(private _http:HttpClient) {

    }

    getInvoices(clientId:number):Observable<any> {

      let params = new HttpParams();
      params = params.append('clientId', clientId+"");
      return this._http.get(this.httpUrl,{params: params});
    }

    getAllClients():Observable<any>{
      return this._http.get(this.allClientURL);
    }
     
}