import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
   //variable concernant le login
   login:String;
   password:String;
   error:Boolean;
   erreur:String;
   /////
 
  constructor(private utilisateurService:UtilisateurService,private router:Router,public spinner: NgxSpinnerService) {}
 

  logForm(){
    this.spinner.show();

    try {
      this.error=false;
      this.erreur=""
      this.utilisateurService.login(this.login,this.password).subscribe(data=>{
      //on vas recupere le message de retour et voir si tout ses bien passe

      if(data.message=="ok"){
        //enregistrement de l'utilisateur dans le local storage
        localStorage.setItem('utilisateur',JSON.stringify(data.data))

        // if(data.data.role.libellerole=="ADMIN"){
          //rediriger vers la page admin

          this.router.navigate(['/dashboard'])
          this.spinner.hide();

        // }else if(data.data.role.libellerole=="RESPONSABLE"){
          //rediriger vers la page responsable

        // }else{
          //rediriger vers la page du simple utilisateur

        // }
      }else if(data.message=="error"){
        this.error=true;
        this.erreur=data.data
        this.spinner.hide();
      }else{
        this.error=true;
        this.erreur="Erreur liée au serveur !"
        this.spinner.hide();
      }
    })

    } catch (error) {
      this.error=true;
        this.erreur="Erreur liée au serveur !"
        this.spinner.hide();
    }
  }


}
