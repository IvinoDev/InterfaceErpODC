import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TachedesignationService {
  env = environment;
  libelle:string;
  etat:string;

  constructor(private http:HttpClient) { }


  CreateTache(login:string,password:string,taches:any){
    const data:FormData=new FormData();

    const user=[{"login":login,"password":password}]
    
    console.log(taches)
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    data.append('tache', JSON.stringify(taches).slice(1,JSON.stringify(taches).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/tache/creerTache`,data);
  }


//;;;;;;;;;;;;;;;;;;;;;;creer designation::::::::::::::::::::

  creerDesignation(login: String, password: String ,libelle: String ): Observable<any> {

    const data: FormData = new FormData();
    const user = [{ "login": login, "password": password }]
    const designation=[{ "libelle": libelle}]    // "etat": etat 
    data.append('user', JSON.stringify(user).slice(1, JSON.stringify(user).lastIndexOf(']')));
    data.append('designation', JSON.stringify(designation).slice(1, JSON.stringify(designation).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/designation/designation`, data)

}
 
getEtat(){
  
}


//::::::::::::::::::::::recuperer designation et tache par l'id de l'activité ::::::::::::::::::::::::::::::::::

   getAlltaches(login: String, password: String,idactivite:number) :Observable<any> {
    const data: FormData = new FormData();
    const user = [{ "login": login, "password": password }]
    
    data.append('user', JSON.stringify(user).slice(1, JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/tache/AfficherToutesTaches/${idactivite}`, data);

    }


    getAlldesignation(login: String, password: String): Observable<any> {
      const data: FormData = new FormData();
      const user = [{ "login": login, "password": password }]
      
      data.append('user', JSON.stringify(user).slice(1, JSON.stringify(user).lastIndexOf(']')));
  
      return this.http.post(`${this.env.api}/designation/Designation/GetAll`, data);
  
      }

      // ::::::::::::::::supprimer tache:::::::::::::::::::::::::::://

      deleteTache(login: String, password: String, id: number):Observable<any>{
        const data: FormData = new FormData();
        const user = [{ "login": login, "password": password }]
      
        console.log(user)
      
        data.append('user', JSON.stringify(user).slice(1, JSON.stringify(user).lastIndexOf(']')));
      
        return this.http.post(`${this.env.api}/tache/supprimerTache/${id}`, data);
      
      }


      //::::::::::::::::::::::::::récuperer tache par son id::::::::::::::::::::// 
   RecupTacheById(login: String, password: String, id: number): Observable<any> {

    const data: FormData = new FormData();
    const user = [{ "login": login, "password": password }]


    data.append('user', JSON.stringify(user).slice(1, JSON.stringify(user).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/tache/tacheParId/${id}`, data);
  }
}
