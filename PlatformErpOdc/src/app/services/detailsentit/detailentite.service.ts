import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailentiteService {

  env=environment;

  constructor(public http:HttpClient) { }

  voirdetailsEntiteid(login:String, password:String,id:number):Observable<any>{
    const data:FormData=new FormData();
    const user=[
      {
        "login":login,
        "password":password
      }];
      // const identite=[
      //   {
      //     "id":id,
        
      //   }]
      data.append('user' , JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
      // data.append('id' , JSON.stringify(identite).slice(1,JSON.stringify(identite).lastIndexOf(']')));
      return this.http.post(`${this.env.api}/entite/get/entite/${id}`, data);
  }
}
