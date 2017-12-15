import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private _apiService: ApiService, private _route: ActivatedRoute, private _router: Router) { }
  user: any = {name: "", email: ""};
  ngOnInit() {
  	this._route.paramMap.subscribe((params)=>{
  		this._apiService.showUser(params.get('id'))
  		.subscribe((userData:any)=>{
  			this.user = userData;
  		})
  	})
  	
  }
  logout(){
  	this._apiService.logoutUser()
  	.subscribe((data:any)=>{
		this._router.navigate(['']);
	})
  }

}
