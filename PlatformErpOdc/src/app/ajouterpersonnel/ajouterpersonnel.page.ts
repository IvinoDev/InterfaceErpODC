import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { EntiteService } from '../services/entite/entite.service';
import { RoleService } from '../services/role/role.service';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-ajouterpersonnel',
  templateUrl: './ajouterpersonnel.page.html',
  styleUrls: ['./ajouterpersonnel.page.scss'],
})
export class AjouterpersonnelPage implements OnInit {

  Entites:any;
  Utilisateur:any;
  Genre: number;
  genre: string;
  EntiteSelectioner: any;
  RoleSelectionner: any;
  entite: any;
  Roles: any;
  role: any;
  numero:any;
  nom:any;
  prenom:any;
  email:any;
  domaine:any;
  formatMail: any;

  constructor(private router: Router, private roleservice:RoleService, private alertController : AlertController,private entiteService:EntiteService,private userService:UtilisateurService) { }

  ngOnInit() {
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur')) 
    console.log(this.Utilisateur)

    this.entiteService.getAllEntites(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      if(data.message=='ok'){
        this.Entites=data.data
        console.log(this.Entites)

      }
    })

    // this.roleservice.getListeFormatMail(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
    //   if(data.message=="ok"){
    //     this.formatMail=data.data
    //     console.log(this.formatMail)
    //   }
    // })

    this.roleservice.getAllRole(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      if(data.message=="ok"){
        this.Roles=data.data
        console.log(this.Roles)
      }
    })

  }


  back(): void {
    window.history.back()
  }
  
      //Pop up de enregistrement reçu
      MessageSuccess(){
        Swal.fire({
          title: "Personnel externe creer avec succes",
          showConfirmButton: true,
          confirmButtonText: "OK",
          confirmButtonColor: '#FF7900',
          heightAuto: false
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigateByUrl('/dashboard/personnels', {skipLocationChange: true}).then(() => {
              this.router.navigate(["/personnels"])
            })

              // this.actualisePagApresSuppresion()
              // this.router.navigateByUrl('/dashboard/personnel-externe')
              // window.location.reload();
        }else if (result.isDenied) {
          this.router.navigateByUrl('/dashboard/personnels')
        }
      });
      }

  CreateIntervenant(){

    for(let i=0; i<this.Roles.length;i++){
      if(this.Roles[i].libellerole==this.role){
        this.RoleSelectionner=this.Roles[i]
      }
    }

    console.log(this.RoleSelectionner)
   
    if(this.genre == 'Masculin')
    {
      this.Genre = 0
    }else{
      this.Genre = 1
    }
    this.userService.CreateUserExterne(this.Utilisateur.login,this.Utilisateur.password,this.email,this.Genre,this.nom,this.prenom,this.numero,this.RoleSelectionner).subscribe(retour=>{
      console.log(retour)
      this.MessageSuccess();
     
    })
  }

}
