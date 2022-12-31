import { ConfigurableFocusTrapFactory } from '@angular/cdk/a11y';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  env=environment;

  constructor(public http:HttpClient) { }

  //methode pour le login
  login(login:String,password:String):Observable<any>{

    console.log(login)
    console.log(password)
    var utilisateur={
      "login":login,
      "password":password
    }
    return this.http.post(`${this.env.api}/utilisateur/login`,utilisateur);
    console.log(utilisateur)
  }

  //methode pour la creation d'un utilisateur
  CreateUser(login:String,password:String,
    nom:String,prenom:String,email:string,Genre: any,file:any,entiteid:any,roleid:any): Observable<any>{

    const data1:FormData=new FormData();
    const user=[{"login":login,"password":password}]

    const data=[{
      "nom":nom,
      "prenom":prenom,
      'email':email,
      "genre":Genre,
      "active":true,
      "notif":true,
      //"login":login,
      //"password":password,
      "monEntite":entiteid,
      "role":roleid
    }]

    console.log(data)

    data1.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    data1.append('data', JSON.stringify(data).slice(1,JSON.stringify(data).lastIndexOf(']')));
    data1.append('file',file)
    return this.http.post(`${this.env.api}/admin/create/user`,data1)
  }

  //methode pour la creation d'un intervenat externe
  CreateUserExterne(login:String,password:String,
    email:string,Genre: any,nom:String,prenom:String,numero:number,roleid:any): Observable<any>{

    const data1:FormData=new FormData();
    const user=[{"login":login,"password":password}]

    const data=[{
      'email':email,
      "genre":Genre,
      "nom":nom,
      "prenom":prenom,
      "numero":numero,
      "role":roleid
    }]

    console.log(data)

    data1.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    data1.append('data', JSON.stringify(data).slice(1,JSON.stringify(data).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/admin/create/intervenant`,data1)
  }

//La fonction pour recuperer un utilisateur
  DetailsUserById(login:String, password:String,id:number):Observable<any>{
    const data:FormData=new FormData();
    const user=[
      {
        "login":login,
        "password":password
      }];
      data.append('user' , JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
      // data.append('id' , JSON.stringify(identite).slice(1,JSON.stringify(identite).lastIndexOf(']')));
      return this.http.post(`${this.env.api}/admin/get/user/${id}`, data);
  }

  //La fonction pour recuperer un utilisateur
  DetailsIntervenantById(login:String, password:String,id:number):Observable<any>{
    const data:FormData=new FormData();
    const user=[
      {
        "login":login,
        "password":password
      }];
      data.append('user' , JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
      // data.append('id' , JSON.stringify(identite).slice(1,JSON.stringify(identite).lastIndexOf(']')));
      return this.http.post(`${this.env.api}/admin/get/intervenant/${id}`, data);
  }



  //La methode pour mettre a jour un user
  UpdateUser(login:String,password:String,
    nom:String,prenom:String,email:string,Genre: any,file:any,entiteid:any,roleid:any,id:any):Observable<any>{

    const data1:FormData=new FormData();
    const user=[{"login":login,"password":password}]

    const data=[{
      "id":id,
      "nom":nom,
      "prenom":prenom,
      'email':email,
      "genre":Genre,
      "active":true,
      "notif":true,
      //"login":login,
      //"password":password,
      "monEntite":entiteid,
      "role":roleid
    }]

    console.log(data)

    data1.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    data1.append('userModif', JSON.stringify(data).slice(1,JSON.stringify(data).lastIndexOf(']')));
    data1.append('file',file)
  
    return this.http.post(`${this.env.api}/admin/update/user/${id}`, data1);
  }



  //La methode pour supprimer un user
  DeleteUser(login:String,password:String,roleid:any,id:any):Observable<any>{
    const data1:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    const data=[{
      "id":id,
      "role":roleid
    }]
    console.log(data)
    data1.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    data1.append('userModif', JSON.stringify(data).slice(1,JSON.stringify(data).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/admin/delete/user/${id}`, data1);
  }





  //La methode pour Desactiver un user
  DesactiverUser(login:String,password:String,roleid:any,id:any):Observable<any>{
    const data1:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    const data=[{
      "id":id,
      "role":roleid
    }]
    console.log(data)
    data1.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    data1.append('userModif', JSON.stringify(data).slice(1,JSON.stringify(data).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/admin/desactive/${id}`, data1);
  }





  //methode qui retourne l'ensemble des utilisateurs
  getAllUsers(login :String, password:String):Observable<any>{

    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    return this.http.post(`${this.env.api}/admin/getUsers/all`, data);  
  }
    //methode qui retourne l'ensemble des intervenants
    getAllIntervenant(login :String, password:String):Observable<any>{
      const data:FormData=new FormData();
      const user=[{"login":login,"password":password}]
      data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
      return this.http.post(`${this.env.api}/admin/intervenant/all`, data);  
    }

  //l'esamble des users active
  getActivesUsers(login :String, password:String):Observable<any>{
   
    const data:FormData=new FormData();
    const user=[{"login":login,"password":password}]
    data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/admin/getUsers/active`, data);  
  }

  
  // //l'ensemble des personnes externes
  // readPersonEx(login :String, password:String):Observable<any>{
   
  //   const data:FormData=new FormData();
  //   const user=[{"login":login,"password":password}]
  //   data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

  //   return this.http.post(`${this.env.api}....................`, data);  
  // }

  //   //l'ensemble des personnes interne
  //   readPersonIn(login :String, password:String):Observable<any>{
   
  //     const data:FormData=new FormData();
  //     const user=[{"login":login,"password":password}]
  //     data.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
  
  //     return this.http.post(`${this.env.api}....................`, data);  
  //   }
  

    

  //l'esamble des users desactive
  getDesactivesUsers():Observable<any>{
    return this.http.get(`${this.env.api}/admin/getUsers/desactive`)
  }
}
