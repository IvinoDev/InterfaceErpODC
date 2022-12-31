import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../services/activite/activite.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajoutparticipant',
  templateUrl: './ajoutparticipant.page.html',
  styleUrls: ['./ajoutparticipant.page.scss'],
})
export class AjoutparticipantPage implements OnInit {
  Utilisateur:any
  participants:any
  activiteselect:any
  longueur:any
  //ngmodel
 /**nomactivite */ nom:any
   nomparticipant:any
   prenom:any
   daten:any
   email:any
   numero:any
   genre:any="Feminin"

   id:any
  alertNomTrue: boolean;
  alertNomFalse: boolean;
  messageerror: string;

  constructor(private activiteService:ActiviteService,private route:ActivatedRoute,private router:Router, private  alertController:AlertController) { }

  ngOnInit() {
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'))
    const idactivite=this.route.snapshot.params['id']
    this.id=idactivite
     console.log("recuperation de l'utilisateur "+this.Utilisateur)

     this.activiteService.getactivitybyId(this.Utilisateur.login,this.Utilisateur.password,idactivite).subscribe(r=>{
      this.activiteselect=r.data;
      console.log(this.activiteselect)
      this.nom=this.activiteselect.nom
    })




  }

  succesImport() {
    //   Swal.fire({'Félicitations ...', 'Fichier importer avec succès !', 'success',
    // });
      Swal.fire({
        position:'center',
        title: 'Participant enregistré',
        //showDenyButton: true,
        // showCancelButton: true,
        confirmButtonText: 'OK',
        //denyButtonText: `Faire tirage`,
        //denyButtonColor:'green',
        // cancelButtonText: 'Non',
        // cancelButtonColor:'#FF7900',
        heightAuto: false,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.router.navigateByUrl('/dashboard/detailactivite', {skipLocationChange: true}).then(() => {
            this.router.navigate(["/detailactivite",this.id])
          })

        } 
      });
    }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Validé!!!',
      subHeader: 'Participant crée avec Succès!',
      buttons: ['OK'],
    });

    await alert.present();
  }


  ajoutparticipant(){
    var idact=0;

    //recuperation de l'id d'activite
    for(let i=0 ; i<this.activiteselect.length; i++){
      if(this.activiteselect[i].libelle==this.nom){
        idact=this.activiteselect[i].id
      }
    }
var g=0
if(this.genre=="Feminin"){
  g=1
}
      //creation de l'activite
      var participant=[{
        "nom":this.nomparticipant,
        "prenom":this.prenom,
        "email":this.email,
        "numero":this.numero,
        "dateNaissance":this.daten,
        "genre":g
      }]
      console.log(this.id)
      if(this.nomparticipant == null ){
        this.alertNomTrue=true
        this.alertNomFalse=false
        this.messageerror="Renseignez le nom!"
      }
      else if(this.prenom == null) {
        this.alertNomTrue=true
        this.alertNomFalse=false
        this.messageerror="Renseignez le prénom!"
      }else if(this.email == null ){
        this.alertNomTrue=true
        this.alertNomFalse=false
        this.messageerror="Renseignez l'email!"
      }
      
      else if(this.numero == null ){
        this.alertNomTrue=true
        this.alertNomFalse=false
        this.messageerror="Renseignez le numero de téléphone!"
      }else if(this.daten==null){
        this.alertNomTrue=true
        this.alertNomFalse=false
        this.messageerror="Renseignez la date de naissance!"
      }
      else if(this.genre == null){
        this.alertNomTrue=true
        this.alertNomFalse=false
        this.messageerror="Renseignez le genre du participant !"
      }else {
        this.activiteService.ajoutpartticipant(this.Utilisateur.login,this.Utilisateur.password,this.id,participant).subscribe(data=>{
          console.log(data)
          this.succesImport()
          // if(data.message == "ok") {
          //   this.presentAlert()idact
          // } else {
          //   this.notpresent()
          // }
    
        })
      }

    
  }



}
