import { Component, OnInit } from '@angular/core';
import { ClientInfo } from '../interface/client-info';
import { ClientProfileService } from './client-profile.service';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {

  clientInfo:ClientInfo;
  constructor(private clientProfileService:ClientProfileService) { 
    this.clientInfo = {name:"",id:0,shortName:"",gstNo:"",address:""};
  }

  getClientInfo(clientId:number) {
    var me = this;
     this.clientProfileService.getInfo(clientId).subscribe(function(data){
      
       var clientInfo = data[0];
       console.log(clientInfo);
      me.clientInfo['id'] = clientInfo['clientId'];
      me.clientInfo['name'] = clientInfo['clientName'];
      me.clientInfo['shortName'] = clientInfo['shortName'];
      me.clientInfo['gstNo'] = clientInfo['gstNo'];
      me.clientInfo['address'] = clientInfo['address'];
    });
  }

  ngOnInit() {
     this.getClientInfo(7);
  }

}
