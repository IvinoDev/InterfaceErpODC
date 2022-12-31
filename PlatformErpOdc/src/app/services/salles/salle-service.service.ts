import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalleServiceService {
  env = environment;

  constructor(private http: HttpClient) { }

  // :::::::::Recupere salle par id

  getSalleParId(login: String, password: String, id: Number): Observable<any> {


    const data: FormData = new FormData();
    const user = [{ "login": login, "password": password }]

    data.append('user', JSON.stringify(user).slice(1, JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/salle/getSalle/${id}`, data)
  }


  //::::::::::ajout de salle :::::::::::::::::::::::

  ajoutSalle(login: String, password: String, libelle: String, description: string,
    etage: string, nombre: number, userid: any): Observable<any> {

    const data: FormData = new FormData();
    const user = [{ "login": login, "password": password }]


    const salle = [{
      "libelle": libelle,
      'description': description,
      "etage": etage,
      "nombreplace": nombre,
      "disponibilite": true,
      "utilisateur": userid
    }]

    data.append('user', JSON.stringify(user).slice(1, JSON.stringify(user).lastIndexOf(']')));
    data.append('salle', JSON.stringify(salle).slice(1, JSON.stringify(salle).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/salle/creersalle/`, data);
  }
//:::::::::::::::::::::::::::::::Supprimer salle :::::::::::::::::::::::::::::::::::::://

deleteSalle(login: String, password: String, idSalle: number):Observable<any>{
  const data: FormData = new FormData();
  const user = [{ "login": login, "password": password }]

  console.log(user)

  data.append('user', JSON.stringify(user).slice(1, JSON.stringify(user).lastIndexOf(']')));

  return this.http.post(`${this.env.api}/salle/suprime/${idSalle}`, data);

}



  //:::::::::::::::::::::::::::::::::Modifier de salle :::::::::::::::::::::::::::::::::::::::::::

  ModifSalle(login: String, password: String, id: number, libelle: String, description: string,
    etage: string, nombre: number, userid: any): Observable<any> {

    const data: FormData = new FormData();
    const user = [{ "login": login, "password": password }]

    var salle = [{
      "id":id,
      "libelle": libelle,
      'description': description,
      "etage": etage,
      "nombreplace": nombre,
      "utilisateur": userid
    }]
    console.log(salle)

    data.append('user', JSON.stringify(user).slice(1, JSON.stringify(user).lastIndexOf(']')));
    data.append('salle', JSON.stringify(salle).slice(1, JSON.stringify(salle).lastIndexOf(']')));


    return this.http.post(`${this.env.api}/salle/modifiersalle/${id}`, data);
  }

  //recuperer salles disponibles
  //recuperer salles 

  //   getAllDispo(login:String,password:String):Observable<object>{

  //   const data:FormData=new FormData();

  //   const user=[{"login":login,"password":password}]

  //     data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

  //     return this.http.get(`${this.env.api}/salle/SalleDisponible`)


  // //   recupererSalles():Observable<any>{
  // //     return this.http.get(`http://localhost:8080/admin/salle/all`)
  // //   }

  // //   //recuperer salles disponibles
  // //   getAllDispo():Observable<any>{
  // //     return this.http.get(`http://localhost:8080/admin/getSalles/disponible`)

  // //   }
  // //   //:::::::::ajout entite ::::::::::::::::

  // //   ajoutEntite(description:String,libelleentite:String): Observable<any>{

  // //     var entite={
  // //       "description":description,
  // //       'libelleentite':libelleentite,

  // //     }
  // //       return this.http.post(`http://localhost:8080/admin/create/entite`,entite);
  // //   }

  //   }


  getSalleDisponible(login: String, password: String): Observable<any> {

    const data: FormData = new FormData();
    const user = [{ "login": login, "password": password }]
    
    data.append('user', JSON.stringify(user).slice(1, JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/salle/SalleDisponible`, data);
    //return this.http.get(`http://localhost:8080/admin/SalleDisponible/${login}/${password}`);
  }
  getSallesIndispo(login: String, password: String): Observable<any> {

    const data: FormData = new FormData();
    const user = [{ "login": login, "password": password }]
    data.append('user', JSON.stringify(user).slice(1, JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/salle/SalleInDisponible`, data);
  }
}


