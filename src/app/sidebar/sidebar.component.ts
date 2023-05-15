import { Component } from '@angular/core';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  admin_name:string=""
  constructor(private api:ServicesService){
    setInterval(() => {
      console.log(this.api.userDetails)
      this.admin_name = this.api.loginusername
    }, 1000);
  }
}
