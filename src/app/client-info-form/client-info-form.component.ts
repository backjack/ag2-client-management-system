import { Component, OnInit } from '@angular/core';
import {ClientInfo} from '../interface/client-info';

@Component({
  selector: 'app-client-info-form',
  templateUrl: './client-info-form.component.html',
  styleUrls: ['./client-info-form.component.css']
})
export class ClientInfoFormComponent implements OnInit {

  title:string;
     clientInfo:ClientInfo;
     _id:number;
     _name:string;
     _shortName:string;
     _gstNo:string;
     _address:string;

     public visible = false;
     public visibleAnimate = false;
   

    constructor() {
      this.title = "Edit Form";
    this.clientInfo = {

      id:undefined,
      name:undefined,
      shortName:undefined,
      gstNo:undefined,
      address:undefined,
    };
  }
    get id():number{
      return this._id;
    }

    set id(id:number) {
      this._id = id;
    }

    get shortName():string{
      return this._shortName;
    }

    set shortName(shortName:string) {
      this._shortName=shortName;
    }

    get gstNo():string{
      return this._gstNo;
    }

    set gstNo(name:string) {
      this._gstNo=name;
    }

    get address():string{
      return this._address;
    }

    set address(address:string) {
      this._address=address;
    }
    
    
    get name():string{
      return this._name;
    }

    set name(name:string) {
      this._name=name;
    }
    public show(clientInfo): void {
         console.log(clientInfo);
         this.clientInfo = clientInfo;
         this._shortName =clientInfo.shortName;
         this._name =clientInfo.name;
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

  ngOnInit() {
  }

}
