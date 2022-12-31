import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListeImportService {

  
  env=environment;

  constructor(public http:HttpClient) { }

  getAllListes(login:String, password:String):Observable<any>{

    const data:FormData=new FormData();
    const user=[
      {
        "login":login,
        "password":password
      }]
      
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/entite/getAll/entite`, data);
  }

  CreateListe(login :String, password:String,  libelle :String,file:File,):Observable<any>{

    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]

    data.append('file',file)
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/responsable/listpostulant/new/${libelle}`, data);
  }
}
