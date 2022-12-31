import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { EntiteService } from '../services/entite/entite.service';
import { RoleService } from '../services/role/role.service';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-nouveaupersonnel',
  templateUrl: './nouveaupersonnel.page.html',
  styleUrls: ['./nouveaupersonnel.page.scss'],
})
export class NouveaupersonnelPage implements OnInit {

  Entites:any;
  Utilisateur:any;
  Roles:any;
  formatMail:any;
  nom:any;
  prenom:any;
  email:any;
  domaine:any;
  genre:any;
  image:File;
  entite:any;
  activite:any;
  role:any;

  EntiteSelectioner:any;
  RoleSelectionner:any;

  Genre: number;
  formatMailSelectionner: any;
  contact: number;
  lieunaissance: String;

  constructor(private router: Router, private alertController : AlertController,private entiteService:EntiteService,private roleservice:RoleService,private userService:UtilisateurService) { }

  ngOnInit() {
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur')) 
    console.log(this.Utilisateur)

    this.entiteService.getAllEntites(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      if(data.message=='ok'){
        this.Entites=data.data
        console.log(this.Entites)

      }
    })

    this.roleservice.getAllRole(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      if(data.message=="ok"){
        this.Roles=data.data
        console.log(this.Roles)
      }
    })

    this.roleservice.getListeFormatMail(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      if(data.message=="ok"){
        this.formatMail=data.data
        console.log(this.formatMail)
      }
    })
    
  }

  back(): void {
    window.history.back()
  }

  envoyerImage(event: any){
    this.image = event.target["files"][0];
    console.log(this.image)
  }


  
  // async presentAlert() {
  //   const alert = await this.alertController.create({
  //     header: 'Validé!!!',
  //     subHeader: 'Personnel créée avec Succès!!',

  //     buttons: ['OK'],
  //   });

  //   await alert.present();
  // }
  // async notpresent() {
  //   const alert = await this.alertController.create({
  //     header: 'Personnel non créée!!!',
  //     subHeader: 'veuillez réessayer!!',

  //     buttons: ['OK'],
  //   });

  //   await alert.present();
  // }
  alertSiTousLesChampSonVide(){
    Swal.fire({
      title: "Tous les champs sont Obligatoires",
      showConfirmButton: true,
      confirmButtonText: "OK",
      confirmButtonColor: 'red',
      heightAuto: false
    })
  }

  alertSiTousLesChampSonBienRenseigner(){
    Swal.fire({
      title: "Personnel crée avec succès",
      showConfirmButton: true,
      confirmButtonText: "OK",
      confirmButtonColor: '#FF7900',
      heightAuto: false
    }).then((result) => {
      if (result.isConfirmed) {
          this.router.navigateByUrl('/dashboard/personnels', {skipLocationChange: true}).then(() => {
      this.router.navigate(["/personnels"]);
      });
      
    }else if (result.isDenied) {
      this.router.navigateByUrl('/dashboard/personnels')
    }
  });
  }


  CreateUser(){
    for(let i=0;i<this.Entites.length;i++){
      if(this.Entites[i].libelleentite==this.entite){
        this.EntiteSelectioner=this.Entites[i]
      }
    }
    for(let i=0; i<this.Roles.length;i++){
      if(this.Roles[i].libellerole==this.role){
        this.RoleSelectionner=this.Roles[i]
      }
    }
    for(let i=0; i<this.formatMail.length;i++){
      if(this.formatMail[i].libelle==this.domaine){
        this.formatMailSelectionner=this.formatMail[i]
      }
    }
    console.log(this.RoleSelectionner)
    console.log(this.EntiteSelectioner)
    console.log(this.formatMailSelectionner)
   
    if(this.genre == 'Masculin')
    {
      this.Genre = 0
    }else{
      this.Genre = 1
    }
    this.userService.CreateUser(this.Utilisateur.login,this.Utilisateur.password ,this.nom,this.prenom,this.email+this.domaine,this.Genre,this.image,this.EntiteSelectioner,this.RoleSelectionner).subscribe(retour=>{
      console.log(retour)
      this.alertSiTousLesChampSonBienRenseigner();
      // this.presentAlert()
    })
  }

  

}
