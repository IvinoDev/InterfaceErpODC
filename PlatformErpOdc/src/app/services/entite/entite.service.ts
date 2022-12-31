import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntiteService {
  

  env=environment;

  constructor(public http:HttpClient) { }

  getAllEntites(login:String, password:String):Observable<any>{

    const data:FormData=new FormData();
    const user=[
      {
        "login":login,
        "password":password
      }]

    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/entite/getAll/entite`, data);
  }

  

  PostEntite(login :String, password:String, file:File, libelleentite :String, description: String, utilisateur: any, gerant: any):Observable<any>{

    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    const entite=[{"libelleentite":libelleentite,"description":description, "createur":utilisateur, "gerant":gerant}]

    console.log(user)
    console.log(entite)

    data.append('file',file)
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    data.append('entite', JSON.stringify(entite).slice(1,JSON.stringify(entite).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/entite/create/entite`, data);
  }
  //Methode permettant de retoujrner le nombre d'activiter realiser activites/entite/{identite}
  gettAllActiviterParEntite(login :String, password:String,identite:any):Observable<any>{
    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/admin/activites/entite/${identite}`,data)
  }
  getAllPersonnelParEntite(login :String, password:String,identite:any):Observable<any>{
    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/admin/entitepersonnels/${identite}`,data)
  }
  getAllAprenantParEntite(login :String, password:String,identite:any):Observable<any>{
    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/admin/entiteapprenantss/${identite}`,data)
  }

  //Methode permettant de mettre ent jour une entite
  updateEntiteById(login: any, password: any, id: any,imageentite:any, libelleentite:any,description:any, Utilisateur:any,lead:any):Observable<any>{
    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    const entite=[{"id":id,"libelleentite":libelleentite,"description":description, "createur":Utilisateur, "gerant":lead}]
    data.append('file', imageentite)
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    data.append('entite', JSON.stringify(entite).slice(1,JSON.stringify(entite).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/entite/update/entite/${id}`,data)
  }

  MiseupdateEntiteById(login: any, password: any, id: any,active:boolean):Observable<any>{
    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/entite/update/entite/${active}/${id}`,data)
  }

  deleteEntiteById(login: any, password: any, id: any){

    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    return this.http.post(`${this.env.api}/entite/delete/entite/${id}`,data)
  }
}
