import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import {HomeService} from '../../core/services/home.service'
@Component({
  selector: 'app-homep',
  templateUrl: './homep.component.html',
  styleUrls: ['./homep.component.scss']
})
export class HomepComponent implements OnInit {

  constructor(private authService:AuthenticationService,private homeService:HomeService) { }

  ngOnInit(): void {
    this.__getUsers()
  }

  __getUsers(){
    this.homeService.getUsers().subscribe(data=>console.log("daata",data))
  }
}
