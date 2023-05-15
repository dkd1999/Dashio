import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  adm_name:object={}
  
  constructor(private routeadmin: Router, private api: ServicesService) {
    setInterval(() => {
      console.log(this.api.userDetails)
      this.adm_name = this.api.userDetails
    }, 1000);
  }

  @Output() onMenuBtnClick = new EventEmitter();
  admin() {
    this.routeadmin.navigateByUrl('admin');
    console.log('hello');
  }
  feedback() {
    this.routeadmin.navigateByUrl('feedback');
  }
  menubtnclick() {
    this.onMenuBtnClick.emit();
    this.api.getusername
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
  }
}
