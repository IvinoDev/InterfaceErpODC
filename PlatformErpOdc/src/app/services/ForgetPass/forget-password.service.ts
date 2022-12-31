import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {


  env=environment;

  constructor(public http:HttpClient) { }

  SendEmail(email:String ):Observable<any>{

    const data:FormData=new FormData();
    const user=[
      {
        "email":email
      }]
      data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/motdepass/forgetpassword`,data);
  }

  ChangePass(email:String, password:String,code:String ):Observable<any>{

    const data:FormData=new FormData();
    const user=[
      {
        "email":email,
        "password":password
      }]
      data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/motdepass//change/password/${code}`,data);
  }

}
