import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AccueilserviceService {
  env=environment;

  constructor(public http:HttpClient) { }

  
  GetActviteTotal(login:String, password:String):Observable<any>{
    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/utilisateur/totalactivite`, data);
  }

  //toutes les activites ::::::::::::

  GetToutesActivites(login:String, password:String):Observable<any>{

    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/utilisateur/totalactivite`, data);
  }

 

  // :::::::::::::::::::::::activites en cours
  GetActiviteEncour(login:String, password:String):Observable<any>{
    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/admin/activites/encour`, data);
    //return this.http.get(`${this.acour}/${id}`);
  }

  // :::::::::::::::::::::::activites à venir :::::::::::::::::
  GetActiviteAvenir(login:String, password:String):Observable<any>{
    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/admin/activites/avenir`, data);  }








  GetAllEntite(login:String,password:String):Observable<any>{
    return this.http.get(`http://localhost:8080/admin/getAll/entite/${login}/${password}`);
  }




  //;:::::::::::::::::::TOTAL POSTULANT::::::::::::::::
  GetParticipantTotal(login :String, password:String):Observable<any>{

    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    //return this.http.post(`${this.env.api}/admin/getUsers/active`, data);

    return this.http.post(`${this.env.api}/responsable/participants/All`,data);
  }

  participantFeminins(login :String, password:String):Observable<any>{

    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    //return this.http.post(`${this.env.api}/admin/getUsers/active`, data);

    return this.http.post(`${this.env.api}/admin/partcipantfeminins`,data);
  }

  participantEnfants(login :String, password:String):Observable<any>{

    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    //return this.http.post(`${this.env.api}/admin/getUsers/active`, data);

    return this.http.post(`${this.env.api}/admin/partcipantenfants`,data);
  }
  //;:::::::::::::::::::TOTAL ENTITE::::::::::::::::

}
