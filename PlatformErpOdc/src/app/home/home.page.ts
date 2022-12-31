import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

   //variable concernant le login
   login:String;
   password:String;
   /////
 
  constructor(private utilisateurService:UtilisateurService,private router:Router) {}

   Utilisateur:any

  logForm(){
    this.utilisateurService.login(this.login,this.password).subscribe(data=>{
      //on vas recupere le message de retour et voir si tout ses bien passe
      console.log(data)

      if(data.message=="ok"){
        //enregistrement de l'utilisateur dans le local storage
        localStorage.setItem('utilisateur',data.data)
        
        console.log(data.data)
        if(data.data.role.libellerole=="ADMIN"){
          //rediriger vers la page admin

          this.router.navigate(['/accueil'])

        }else if(data.data.role.libellerole=="RESPONSABLE"){
          //rediriger vers la page responsable

        }else{
          //rediriger vers la page du simple utilisateur

        }
      }else if(data.message=="error"){
        console.log(data.data);
      }
    })
  }
}
