import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../classes/user';
import { Observable } from 'rxjs';
@Injectable({providedIn:'root'})
export class AuthenticationService {

  userLoggedIn = false;
  constructor(private http:HttpClient) { }
  isUserLoggedIn(){
    return this.userLoggedIn;
  }
  logUserIn(){
    this.userLoggedIn = true;
  }
  logUserOut(){
    this.userLoggedIn = false;
  }

  public loginUser(user:User){
     this.userLoggedIn = true;
     return this.http.post("http://localhost:8080/login",user)
  }


}
