import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard-v1';
  ShowHead:any
  constructor(private router:Router){
    // on route change to login, set variable show head to be false
    router.events.forEach((event)=>{
      if(event instanceof NavigationEnd){
        if (event.url === '/' || event.url === '/register')  {
          this.ShowHead =false
          // console.log(`kanikkanda`);
          
        }
         else {
          this.ShowHead = true
          // console.log(`kanikk`);
          
        }
      }
    })
  }

  sidebarClosed:boolean = false

  toggle(){
    this.sidebarClosed = !this.sidebarClosed
  }
}
