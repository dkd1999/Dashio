import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  loginusername:string=""
  loginuserpswd:string=""
  username:any
  password:string = ""
  userDetails: any = {
  };
  saveData() {
    if (this.userDetails) {
      localStorage.setItem('database', JSON.stringify(this.userDetails));
    }
  }

  getData(){
    this.userDetails = JSON.parse(localStorage.getItem('database')!)
}
getusername(event:any){
  console.log(event.target.value);
  this.username=localStorage.getItem('user')
}

getuserpswd(event:any){
  console.log(event.target.value);
  this.password=event.target.value 
}
logout(){
  localStorage.removeItem('user')
  console.log('rem');
  
}

}
