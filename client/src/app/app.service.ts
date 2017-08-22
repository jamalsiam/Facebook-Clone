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