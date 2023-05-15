import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name: string = '';
  username: string = '';
  password: string = '';
  confirmpassword: string = '';
  userDetails: any = {
   
  };
  outputcontent: any;

  constructor(private loginRouter: Router, private data:ServicesService) {}

  saveData() {
    if (this.userDetails) {
      localStorage.setItem('database', JSON.stringify(this.userDetails));
    }
  }

  
  getData(){
    this.userDetails = JSON.parse(localStorage.getItem('database')!)
}

  register() {
    let uname = this.username;
    let pswd = this.password;
    console.log(uname);
    console.log(pswd);
    if (uname && pswd) {
      if (uname in this.userDetails) {
        this.outputcontent = '<h3>User already Exist</h2>';
      }
      else if(this.password != this.confirmpassword){
        this.outputcontent = '<h3>Passwords must the same'
      }
      else {
        this.userDetails[uname] = { username: uname, password: pswd };
        console.log(this.userDetails);
        // to store userDetails in local storage
        this.saveData();
        alert(`Registered Successfully as ${uname} ,redirecting you to login page`);
        this.loginRouter.navigateByUrl('');
      }
    } else {
      this.outputcontent = '<h3>Enter valid details</h3>';
    }
  }
}
