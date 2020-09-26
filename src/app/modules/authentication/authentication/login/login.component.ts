import { Component, OnInit } from '@angular/core';
import { User } from './user';
import {AuthenticationService} from '../login/authentication.service'
import { Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private service:AuthenticationService, private _route:Router) { }
  user = new User();
  msg = false
  ngOnInit(): void {
  }
  loginUser(){
  this.service.loginUser(this.user).subscribe(
    data=>{
      this._route.navigate(['/home'])
    },
    error=>console.log("error"))
    this.msg = true;
  }

}
