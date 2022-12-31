import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  env = environment;

  constructor(private http: HttpClient) { }
  

  getStatut(login: String, password: String): Observable<any> {

    const data: FormData = new FormData();
    const user = [{ "login": login, "password": password }]

    data.append('user', JSON.stringify(user).slice(1, JSON.stringify(user).lastIndexOf(']')));

    return this.http.post(`${this.env.api}/tache/status/all`, data);
  }

}
