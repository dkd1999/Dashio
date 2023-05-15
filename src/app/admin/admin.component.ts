import { Component } from '@angular/core';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  admin_name:string=""
  constructor(private api:ServicesService){
    console.log(api.loginusername);
    this.admin_name= api.loginusername
    
  }
  
}
