import { Injectable } from '@angular/core';
import { Http ,Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()

export class ProjectService{

  constructor(private http:Http){
    console.log("Injectable")
   }
	createAuthorizationHeader(headers:Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('a20e6aca-ee83-44bc-8033-b41f3078c2b6:c199f9c8-0548-4be79655-7ef7d7bf9d20')); 
  }

  logIn(record){
     var headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    //var content = JSON.stringify(record);
    return this.http.post(
      '/api/login', record, {
        headers: headers
      }).map(res => res.json())
  }

    signUp(record){
     var headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    //var content = JSON.stringify(record);
    return this.http.post(
      '/api/signup', record, {
        headers: headers
      }).map(res => res.json())
  }

  getProfileInfo(record){
    var headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    //var content = JSON.stringify(record);
    return this.http.post(
      '/api/getprofileinfo', record, {
        headers: headers
    }).map(res => res.json())
  }

	

  changeMobileNumber(record){
     var headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    //var content = JSON.stringify(record);
    return this.http.post(
      '/api/changemobilenumber', record, {
        headers: headers
      }).map(res => res.json())
  }

  changeStatus(record){
     var headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    //var content = JSON.stringify(record);
    return this.http.post(
      '/api/changestatus', record, {
        headers: headers
      }).map(res => res.json())
  }

  changeName(record){
     var headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    //var content = JSON.stringify(record);
    return this.http.post(
      '/api/changename', record, {
        headers: headers
      }).map(res => res.json())
  }

  onPostData(record){
     var headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    //var content = JSON.stringify(record);
    return this.http.post(
      '/api/onpostdata', record, {
        headers: headers
      }).map(res => res.json())
  }

  changeImage(record){
     var headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    //var content = JSON.stringify(record);
    return this.http.post(
      '/api/changeimage', record, {
        headers: headers
      }).map(res => res.json())
  }

  postMethod(record){
     var headers = new Headers();
    this.createAuthorizationHeader(headers);
    headers.append('Content-Type', 'application/json');
    //var content = JSON.stringify(record);
    return this.http.post(
      '/api/postmethod', record, {
        headers: headers
      }).map(res => res.json())
  }
  getMethod (){
    return this.http.get('/api/getMethod').map(res=> res.json());
  }

}