import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListeService {

  env=environment;
  

  constructor(public http:HttpClient) { }
  public importerListePostulant(libelle : String, idactivite:any, file:any, login : String, password : String) : Observable<any> {
    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    data.append('file',file);

    return this.http.post(`${this.env.api}/responsable/listpostulant/new/${libelle}/${idactivite}`,data);
  }


  // :::::::::::::::toute les listes::::::::::::::::
  GetAllListe(login:String,password:String):Observable<any>{
    
    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/utilisateur/AllListePost`,data);
  }

 

   GetListeParId(login:String,password:String,id:number):Observable<any>{
    
     const data:FormData=new FormData();
     const user=[{"login":login,"password":password}]
     data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

     return this.http.post(`${this.env.api}/admin/liste/${id}`,data);
   }


   GetPostulantParListe(login:String,password:String,idTirage:number):Observable<any>{
    
    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/utilisateur/postulantstires/${idTirage}`,data);
  }
  


public getAllactivite(login : string, password : string) : Observable<any> {
    const data : FormData = new FormData();
    const user = [
      {
        "login" : login,
        "password" : password
      }
    ]
    data.append('user',JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/utilisateur/allactivite/`,data)
  }
  
}
