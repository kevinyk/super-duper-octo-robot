import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private _http: HttpClient) { }
  addUser(userObj){
  	return this._http.post('/api/users', userObj);
  }
  getCurrentUser(){
  	return this._http.get('/api/users/current');
  }
  loginUser(userObj){
  	return this._http.post('/api/login', userObj);
  }
  getUsers(){
    return this._http.get('/api/users');
  }
  showUser(userId){
    return this._http.get('/api/users/'+userId);
  }
  logoutUser(){
    return this._http.get('/api/logout');
  }
}
