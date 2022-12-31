import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListeparticipantService {
  env=environment;



  constructor(private http:HttpClient) { }
  ImporterlisteParticipant(login:String, password:String, file:File ,libelleliste:String,idactivite:any): Observable<any>{

  const dataa:FormData=new FormData();
  const user=[{"login":login,"password":password}];
     console.log(user)


    dataa.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
    dataa.append('file',file)
    return this.http.post(`${this.env.api}/responsable/listparticipant/new/${libelleliste}/${idactivite}`,dataa);
  }


  ToutLesParticipant(login:String, password:String): Observable<any>{

    const dataa:FormData=new FormData();
    const user=[{"login":login,"password":password}];
    
    dataa.append('user', JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));
      return this.http.post(`${this.env.api}/responsable/participants/All`,dataa);
    }
  
  // Filtrer les participants 
  filtrerParticipant(login : String, password : String, typeactivite : String, datedebut : Date, datefin : Date) : Observable<any> {
    const data : FormData = new FormData();

    const user = [{"login":login,"password":password}];

    data.append('user',JSON.stringify(user).slice(1,JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/responsable/participants/filtre/${typeactivite}/${datedebut}/${datefin}`,data);
  } 

  
}

