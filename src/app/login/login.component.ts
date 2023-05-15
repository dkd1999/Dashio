import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../service/services.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  content:string = "user"
  username:string = ""
  password:string = ""
  outputcontent:any

  constructor(private loginRouter:Router, private data:ServicesService) {}


  getusername(event:any){
    console.log(event.target.value);
    this.username=event.target.value
  }

  getuserpswd(event:any){
    console.log(event.target.value);
    this.password=event.target.value 
  }

  login(){
    
    this.data.loginusername = this.username
    this.data.loginuserpswd = this.password
    this.data.getData()
    if(!this.data.userDetails){
      this.outputcontent = '<h3>Incorrect Username</h3>';
    }
    else if(this.username && this.password){
      if(this.username in this.data.userDetails){
        if(this.password == this.data.userDetails[this.username].password){
          alert(`Login successful, Welcome Admin ${this.username}  `)
          localStorage.setItem("user",this.username)
          this.loginRouter.navigateByUrl('dashboard')
        }
        else{
          this.outputcontent = '<h3>Incorrect Password</h2>';
        }
      }
      else{
        this.outputcontent = '<h3>Incorrect Username</h2>';
      }
    }
    else{
      this.outputcontent = '<h3>Enter valid Details</h2>';
    }
  }
}

