import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ImporterListeparticipantPage } from '../importer-listeparticipant/importer-listeparticipant.page';
import { ActiviteService } from '../services/activite/activite.service';
import { ListeService } from '../services/listes/liste.service';

@Component({
  selector: 'app-importliste',
  templateUrl: './importliste.page.html',
  styleUrls: ['./importliste.page.scss'],
})
export class ImportlistePage implements OnInit {
  Utilisateur : any;
  name : String;
  fichier : any;
  idactivite:any;
  activiteselect: any;
  listeactivite : any;
constructor(private serviceliste : ListeService, private route : Router, private activiteService:ActiviteService){}
  succesImport() {
    Swal.fire({
       title: 'Liste importée avec succès !',
       text : 'Choisissez une action :',
       showDenyButton: true,
       showCloseButton: true,
       showCancelButton: false,
       closeButtonAriaLabel: 'Fermer',
       denyButtonText: 'Faire un tirage',
       denyButtonColor:'green',
       heightAuto: false,
     }).then((result) => {
       /* Read more about isConfirmed, isDenied below */
       if (result.isConfirmed) {
         
       } else if (result.isDenied) {
         //Swal.fire('Changes are not saved', '', 'info');
         this.route.navigate(['/dashboard/tirage'])
       }
     });
  }

  errorImport(message : any) {
    Swal.fire({
       title: 'Erreur !',
       text : message,
       showDenyButton: false,
       showCloseButton: true,
       showCancelButton: false,
       closeButtonAriaLabel: 'Fermer',
       heightAuto: false,
     });
  }

  ngOnInit() {

    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur')) ;

    this.activiteService.GetAllActiviteSansPartcipant(this.Utilisateur.login, this.Utilisateur.password).subscribe(chemin=>{
      this.listeactivite = chemin.data
      console.log(chemin.data)
    })
  }

  televerser(event : any){
    this.fichier = event.target["files"][0];
  }

  public importerList() {
    for(let i = 0; i < this.listeactivite.length; i++) {
      if(this.listeactivite[i].nom == this.idactivite) {
        this.activiteselect = this.listeactivite[i]
        console.log(this.activiteselect)
      }
    }
    const requete = this.serviceliste.importerListePostulant(this.name, this.activiteselect.id, this.fichier, this.Utilisateur.login, this.Utilisateur.password);
      requete.subscribe({
      next: reponse => {
        console.log(reponse)
        if(reponse.message == "ok") {
          this.succesImport()
        }
        if(reponse.message == "error") {
          this.errorImport(reponse.message)
        }
        
      },
      error: reponse => {
        this.errorImport("Erreur lors de l'import !")
      }
    });
    
  }

}
