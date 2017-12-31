import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { HttpParams } from "@angular/common/http";



@Injectable()
export class ClientProfileService {

    private httpUrl:string = "http://localhost:3000/default/info";
    constructor(private _http:HttpClient) {}

    getInfo(clientId:number):Observable<any> {
       let params = new HttpParams();
       params =params.append("clientId",clientId+"");
       return this._http.get(this.httpUrl,{params:params});
    }

}