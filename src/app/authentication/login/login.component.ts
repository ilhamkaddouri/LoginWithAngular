import { Component, OnInit } from '@angular/core';
import {User} from '../../core/classes/user';
import {Router} from '@angular/router'
import { AuthenticationService } from './../../core/services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = new User();
  constructor(private _route:Router,private service:AuthenticationService) { }
  msg:boolean;
  
  ngOnInit(): void {
  }
  Login(){
    this.service.loginUser(this.user).subscribe(
      data=>{
          this.msg = true;
          this._route.navigate(['/home'])
      },
      error=>{
        this.msg = false;console.log("error")
      }
    )
    this.service.logUserIn();
    console.log("hello")
    this._route.navigateByUrl('/home')
  }
  Register(){
    
  }

}
