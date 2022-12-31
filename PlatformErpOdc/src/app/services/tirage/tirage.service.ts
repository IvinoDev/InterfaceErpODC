import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TirageService {
  env=environment;
  constructor(private http:HttpClient) { }
  
  // :::::::::::::::Faire tirage ::::::::::::::::::::::::::::::::::::::::::::::::::
  doTirage(login:String,password:String,libelleliste:number,nombre:number,libelleTirage:String):Observable<any>{
    
    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/responsable/tirage/new/${libelleliste}/${nombre}/${libelleTirage}`,data);
  }

//:::::::::::::::::::Recuperer tirage par id:::::::::::::::::::::::::::::::::::
getTirageById(login:String,password:String,id:number):Observable<any>{
    
  const data:FormData=new FormData();
  const user=[{"login":login,"password":password}]
  data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
  return this.http.post(`${this.env.api}​/utilisateur​/tirageById​/${id}`,data);
}

//tous les tirages  

GetTotalTirage(login:String,password:String):Observable<any>{
  const data:FormData=new FormData();
  const user=[{"login":login,"password":password}]
  data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

  return this.http.post(`${this.env.api}/admin/TouteslesTirages`, data);
}

//tous les tirages valider
GetTiragevalides(login:String,password:String):Observable<any>{
  const data:FormData=new FormData();
  const user=[{"login":login,"password":password}]
  data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

  return this.http.post(`${this.env.api}/admin/tirage/valides`, data);
}
//:::::::::::::::::::Valider tirage par id:::::::::::::::::::::::::::::::::::
ValiderTirage(login:String,password:String,idTirage:number):Observable<any>{
    
  const data:FormData=new FormData();
  const user=[{"login":login,"password":password}]
  data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
  return this.http.post(`${this.env.api}/responsable/valider/tirage/${idTirage}`,data);
}

//tous les postulants d'un tirage
AllPostulantsByTirage(login:String,password:String, idTirage:number):Observable<any>{
  const data:FormData=new FormData();
  const user=[{"login":login,"password":password}]
  data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

  return this.http.post(`${this.env.api}/responsable/tirage/postulants/${idTirage}`, data);
}


// tirage/postulants/{idTirage}
}
