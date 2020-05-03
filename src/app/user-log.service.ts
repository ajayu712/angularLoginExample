import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLogService {
  private isUserLoggedIn;
  private username;

  constructor() { 
    this.isUserLoggedIn=false;
  }
  setUserLoggedIn(){
    this.isUserLoggedIn=true;
  }
  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }

}
