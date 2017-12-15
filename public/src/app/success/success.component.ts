import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(private _apiService: ApiService) { }
  currentUser: any  = {};
  allUsers: any[] = [];
  shownUsers: any[] = [];
  searchTerm: string = "";
  ngOnInit() {
  	this._apiService.getCurrentUser()
  	.subscribe((data)=>{
  		console.log("got current user from db:", data);
  		this.currentUser = data;
      this._apiService.getUsers()
      .subscribe((data:any[])=>{
        this.allUsers = data;
        this.shownUsers = data;
      })
  	})

  }
  searchUsers(searchTerm){
    this.shownUsers = this.allUsers.filter(function(user){
      return user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase());
    })
  }
  logout(){
    this._apiService.logoutUser()
    .subscribe((data:any)=>{
    this._router.navigate(['']);
  })
  }

}
