import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {

  env=environment;

  constructor(public http:HttpClient) { }
  attributionservice(login:string,password:string,idsalle:Number,idActivite:Number,):Observable<any>{
    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/salle/attribuersalle/${idsalle}/${idActivite}/`,data);

  }

  ajoutpartticipant(login:string,password:string,idActivite:Number,participant:any){
    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    console.log(participant)
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    data.append('aoup', JSON.stringify(participant).slice(1,JSON.stringify(participant).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/admin/aoup/${idActivite}`,data);

  }

  getallpostulantsbyidact(login:string,password:string,idActivite:Number):Observable<any>{
    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/admin/participants/${idActivite}`,data);

  }


  Creer(login:string,password:string,file:any,activite:any):Observable<any>{
    const data:FormData=new FormData();

    const user=[{"login":login,"password":password}]
    data.append('file',file);
    //data.append('data',activite);
    console.log(activite)
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    data.append('data', JSON.stringify(activite).slice(1,JSON.stringify(activite).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/utilisateur/activite/new`,data);
  }


    GetActiviteStatut(login:string,password:string,idActivite:Number):Observable<any>{
      const data:FormData=new FormData();
      const user=[{"login":login,"password":password}]

      data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

      return this.http.post(`${this.env.api}/admin/statut/activite/${idActivite}`,data);

    }


    GetActiviteavenir(login:string,password:string):Observable<any>{
      const data:FormData=new FormData();
      const user=[{"login":login,"password":password}]

      data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

      return this.http.post(`${this.env.api}/admin/activites/avenir`,data);
    }

    GetActivitencour(login:string,password:string):Observable<any>{
      const data:FormData=new FormData();
      const user=[{"login":login,"password":password}]

      data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

      return this.http.post(`${this.env.api}/admin/activites/encour`,data);

    }

    GetActiviteterminer(login:string,password:string):Observable<any>{
      const data:FormData=new FormData();
      const user=[{"login":login,"password":password}]
      data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
      return this.http.post(`${this.env.api}/admin/activites/termines`,data);
    }

    GetActivitebyentite(login:string,password:string,idEntite:Number):Observable<any>{
      const data:FormData=new FormData();
      const user=[{"login":login,"password":password}]

      data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

      return this.http.post(`${this.env.api}/admin/activites/entite/${idEntite}`,data);

    }

     // :::::::::::::::toute les activites sans salles ::::::::::::::::
  GetTtActivitewithoutsalle(login:String,password:String):Observable<any>{

    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/salle/activitesanssalle`,data);
  }






  // :::::::::::::::toute les activites ::::::::::::::::
  GetTtActivite(login:String,password:String):Observable<any>{

    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/utilisateur/allactivite`,data);
  }

  // :::::::::::::::Activités filtrées::::::::::::::::
  getFiltre(login : String, password : String, nomactivite : String, typeactivite : String, entite : String, dtdebut : Date, dtfin : Date) : Observable<any> {
    const data : FormData = new FormData();
    const user = [{"login" : login, "password" : password}]
    
    data.append('user',JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/utilisateur/activite/${nomactivite}/${typeactivite}/${entite}/${dtdebut}/${dtfin}`,data);
  }

  //recuperer les entites pour la select liste lors de la creation d'activite
  entite="http://localhost:8080/admin/getAll/entite";

  GetAllEntite(login:String,password:String):Observable<any>{

    return this.http.get(`http://localhost:8080/admin/getAll/entite/${login}/${password}`);
  }

  getactivitybyId(login:String,password:String, idactivite:number):Observable<any>{

    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/utilisateur/activite/${idactivite}`,data);
  }

  deletebyid(login:String,password:String, idactivite:number):Observable<any>{

    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/utilisateur/supprimeractivite/${idactivite}`,data);
  }
   updatebyid(login:String,password:String, idactivite:number):Observable<any>{
    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/utilisateur/update/activity/${idactivite}`,data);
   }


   delpost(login:String,password:String, ispost:number):Observable<any>{
    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/utilisateur/DeleteApprenant/${ispost}`,data);
   }

   
  getpersonnelsexternes(login:String,password:String):Observable<any>{
    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/admin/intervenant/all`,data);
  }


  /*::::::::::::::::::Retour de la liste des formatMail dans nouvelle personnel interne */
    getAllFormatMail(login:String, password:String):Observable<any>{
      const data:FormData=new FormData();
      const user=[
        {
          "login":login,
          "password":password
        }]

      data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

      return this.http.post(`${this.env.api}/formatemail/getAll`,data)
    }


      // :::::::::::::::Activites sans participants::::::::::::::::
   GetAllActiviteSansPartcipant(login:String,password:String):Observable<any>{

    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/admin/activitesansparticipants`,data);
  }
}
