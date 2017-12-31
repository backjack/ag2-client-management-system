import { Injectable } from "@angular/core";
import { HttpClient,HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ClientPaymentsService {

   private infoURL:string = "http://localhost:3000/default/stats";

    constructor(private _http:HttpClient) {

    }

    getPaymentInfo(clientId:number):Observable<any> {
        let params = new HttpParams();
        params =params.append("clientId",clientId+"");
        return this._http.get(this.infoURL,{params:params});
    }
}