import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  env=environment;
  constructor(public http:HttpClient) { }

  //La fonction pour recuperer tout les notifications
  GetAllNotif(login:String, password:String):Observable<any>{
    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
  
    return this.http.post(`${this.env.api}/notification/allnotification`, data);
  }

  
//La fonction pour recuperer une notification
GetNotificationById(login:String, password:String,id:number):Observable<any>{
  const data:FormData=new FormData();
  const notification=[
    {
      "login":login,
      "password":password
    }];
    data.append('notification' , JSON.stringify(notification).slice(1,JSON.stringify(notification).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/notification/get/notification/${id}`, data);
}

}
