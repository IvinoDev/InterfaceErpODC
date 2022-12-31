import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../services/activite/activite.service';
import { SalleServiceService } from '../services/salles/salle-service.service';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';
import { TypeActiviteService } from '../services/typeActivite/type-activite.service';
import { EntiteService } from '../services/entite/entite.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editactivity',
  templateUrl: './editactivity.page.html',
  styleUrls: ['./editactivity.page.scss'],
})
export class EditactivityPage implements OnInit {
  Utilisateur:any
  id:any
  activitydata:any
  nom:any
  SallesDisponibles: any;
  TypesActivites: any;
  Entites: any;
  PersonnelsActives: any;
  utilisateurs: any;
  externes: any;
////////////////////////////////////


//////////variables name et ngmodel
typeActivite
 typeentite:any;
 nomActivite:any;
 duree:any;
 date:any;
 datedebut:any;
 dateFin:any;
 typeactivite:String;
 libellesalle:String;
 leadNomPrenom:any;
 salles:any;
 description:any;
 image:any;




  FormateursInternes:any;
  FormateursExternes:any;

 //  FormateursUsers:any;
 //  FormateursExters:any;
 alertFalse:any
 alertTrue:any
 alertNomTrue:any
 alertNomFalse:any
 messageerror:any
 message:String;
 erreur:Boolean;
 fichier:any

 Salle:any;
 Type:any;
 lead:any;



  constructor( private router:Router , private salleService:SalleServiceService,private userService:UtilisateurService,private typeActiviteService:TypeActiviteService,
    private activiteService:ActiviteService, private http:HttpClient,
   private entiteService:EntiteService ) { }

  ngOnInit() {
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'))

     console.log("recuperation de l'utilisateur "+this.Utilisateur)

      this.salleService.getSalleDisponible(this.Utilisateur.login,this.Utilisateur.password).subscribe(r=>{
        this.SallesDisponibles=r.data
        console.log(this.SallesDisponibles)
      })


    this.typeActiviteService.getListe(this.Utilisateur.login,this.Utilisateur.password).subscribe(r=>{
      if(r.message=='ok'){
        this.TypesActivites=r.data
        console.log(this.TypesActivites)

      }
    })

    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur')) ;

    this.entiteService.getAllEntites(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour=>{
      this.Entites=retour.data
      console.log(this.Entites)
    })


    this.userService.getActivesUsers(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour=>{
      this.PersonnelsActives=retour.data
      console.log(this.PersonnelsActives)
    })

    this.userService.getActivesUsers(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour=>{
      this.utilisateurs=retour.data
      console.log(this.utilisateurs)
    })


    this.entiteService.getAllEntites(this.Utilisateur.login,this.Utilisateur.password).subscribe(r=>{
      if(r.message=='ok'){
        this.Entites=r.data
        console.log(this.Entites)

      }
    })

    this.activiteService.getpersonnelsexternes(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour=>{
      this.externes=retour.data
      console.log(this.externes)
    })


  }


  ajoutactivite(){

    Swal.fire({
      title: "Modification reussi",
      showConfirmButton: true,
      confirmButtonText: "Confirmer",
      confirmButtonColor: 'green',
      // showCancelButton: true,
      // cancelButtonText: "Annuler",
      // cancelButtonColor: 'red',
      heightAuto: false
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl('/dashboard/allactivity', {skipLocationChange: true}).then(() => {
          this.router.navigate(["/allactivity"])
        })
    }
  });
}
  update(){

    var idSalle=null;
    var idType=null;
    var identity=null;
    var iduser=0;
    var idintervenant=null;


    var FormateursUsers=[];
    var FormateursExters=[]
    console.log(this.FormateursExternes)
    console.log(this.FormateursInternes)

    for(let i=0;i<this.FormateursInternes.length;i++){
      const array=this.FormateursInternes[i].split(" ")

      for(let j=0 ; j<this.PersonnelsActives.length; j++){

        if(this.PersonnelsActives[j].nom==array[0] && this.PersonnelsActives[j].prenom==array[1]){
          console.log(this.PersonnelsActives[j])

          FormateursUsers.push(this.PersonnelsActives[j])
        }
      }

    }

    for(let i=0;i<this.FormateursExternes.length;i++){
      const array=this.FormateursExternes[i].split(" ")

      for(let j=0 ; j<this.externes.length; j++){
        if(this.externes[j].nom==array[0] && this.externes[j].prenom==array[1]){
          console.log(this.externes[j])
          FormateursExters.push(this.externes[j])
        }
      }

    }


    console.log(FormateursUsers)
    console.log(FormateursExters)
    //recuperation de l'id l'entite
    for(let i=0 ; i<this.Entites.length; i++){
      if(this.Entites[i].libelleentite==this.typeentite){
        identity=this.Entites[i]
      }
    }
     //recuperation de l'id dela salle
     for(let i=0 ; i<this.SallesDisponibles.length; i++){
      if(this.SallesDisponibles[i].libelle==this.libellesalle){
        idSalle=this.SallesDisponibles[i]
      }
    }


    //recuperation de l'id du type de l'activite
    for(let i=0 ; i<this.TypesActivites.length; i++){
      if(this.TypesActivites[i].libelle==this.typeactivite){
        idType=this.TypesActivites[i]
      }
    }

    //recuperation de l'id du lead
     for(let i=0 ; i<this.PersonnelsActives.length; i++){
      console.log(this.leadNomPrenom)
      const array=this.leadNomPrenom.split(" ")

      if(this.PersonnelsActives[i].nom==array[0] && this.PersonnelsActives[i].prenom==array[1]){
        this.lead=this.PersonnelsActives[i]
      }
    }


    //creation de l'activite il manque lentite concernée dans la bdd//affaire de salles dispo a ala creation de lactivite
    //fitrage par statut et entity ne fonctionne pas en bdd 3 get deja fait
    //pour une entite recuperer tout les activites en fonction de identite (page detail entite)
    //avant la suppression afficher un message por expliquer la suppression
    var activite=[{
      "nom":this.nomActivite,
      "dateDebut":this.datedebut,
      "dateFin":this.dateFin,
      "description":this.description,
      "leader":this.lead,
      "utilisateurs":FormateursUsers,
      "salle":idSalle,
      "typeActivite":idType,
      "intervenantExternes":FormateursExters
    }]

       if(this.nomActivite == null) {
      this.alertNomTrue=true
      this.alertNomFalse=false
      this.messageerror="Veuillez donner un titre a l'activité "
    }else if(this.dateFin <= this.datedebut ){
      this.alertNomTrue=true
      this.alertNomFalse=false
      this.messageerror="La date de fin doit etre supérieur à la date de fin"

    }else if(this.typeactivite == null){
      this.alertNomTrue=true
      this.alertNomFalse=false
      this.messageerror="Donner un type à l'activité!"
    }else if(this.image == null){
      this.alertNomTrue=true
      this.alertNomFalse=false
      this.messageerror="Ajoutez une image"
    }
    else if(this.description == null){
      this.alertNomTrue=true
      this.alertNomFalse=false
      this.messageerror="Donner une description à l'activité"
    }
    else if(this.leadNomPrenom == null){
      this.alertNomTrue=true
      this.alertNomFalse=false
      this.messageerror="Lead non définis une image"
    }
    else if(this.typeentite == null){
      this.alertNomTrue=true
      this.alertNomFalse=false
      this.messageerror="Entité non définie"
    }else{
      console.log(this.id)
      this.activiteService.updatebyid(this.Utilisateur.login,this.Utilisateur.password,this.id).subscribe(data=>{
        console.log(data)
        if(data.message == 'ok'){
          this.ajoutactivite();
         }else if(data.message != "ok"){
           console.log("bdd error")
         }

      })





    }



  }

            //fichier selection
            selectFile(e:any){
              //verification si une photo a été choisie ou pas
              if(!e.target.files[0] || e.target.files[0].length==0){
                this.message="Vous devez choisir un fichier execel !";
                this.erreur=true;
                return;
              }

              //verification du type de fichier choisi pour recaler si ce n'est pas une photo
              var typeFichier=e.target.files[0].type;




              if(e.target.files){
                var reader= new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.onload=(event:any)=>{
                  this.message="";
                  //this.fichier=event.target.result;
                  this.fichier=e.target['files'][0];
                }
              }
            }




}
