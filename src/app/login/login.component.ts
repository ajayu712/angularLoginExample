import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogService } from '../user-log.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  constructor(private router:Router,private user:UserLogService) { }
  ngOnInit(): void {
  }
  loginUser(){
    console.log(this.username,this.password);
    if(this.username=="admin" && this.password=="admin123")
    {
      this.user.setUserLoggedIn();
      console.log("Hello "+this.username);
      this.router.navigate(['/dashboard']);
    }
    else{
      alert("*****Wrong Username or Password*****");
    }
  }
}
