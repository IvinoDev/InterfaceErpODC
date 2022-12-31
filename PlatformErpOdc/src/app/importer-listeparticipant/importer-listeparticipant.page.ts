import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { ActiviteService } from '../services/activite/activite.service';
import { ListeparticipantService } from '../services/listeparticipants/listeparticipant.service';

@Component({
  selector: 'app-importer-listeparticipant',
  templateUrl: './importer-listeparticipant.page.html',
  styleUrls: ['./importer-listeparticipant.page.scss'],
})
export class ImporterListeparticipantPage implements OnInit {

  listeactivite:any;
   Utilisateur:any;
   importerliste:any;
   file: File;
   libelleliste:String;
   idactivite:any;
   activiteselect: any;
   id:any
   //nom de lectivité
   nom:any
  constructor( private liste:ActiviteService, private router: Router, private importation: ListeparticipantService,private nav:NavController,private route:ActivatedRoute) { }
  NoImporte(string){
    Swal.fire({
      position:'center',
      title: string,
      heightAuto: false,
  });
  }
  succesImport() {
    //   Swal.fire({'Félicitations ...', 'Fichier importer avec succès !', 'success',
    // });
      Swal.fire({
        position:'center',
        title: 'Liste importée avec succès !\nVoulez-vous voir la liste :',
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
            this.router.navigate(["/dashboard/detailactivite",this.id])
          })

        } else if (result.isDenied) {
          this.nav.navigateRoot('importer-listeparticipant')
        }
      });
    }

  ngOnInit() {

    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'))
     console.log(this.Utilisateur)
    // this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'))
    // this.liste.GetTtActivite(this.Utilisateur.login, this.Utilisateur.password).subscribe(chemin=>{
    //   this.listeactivite = chemin.data
    //   console.log("afficher tous "+chemin)
    // })
    const idactivite=this.route.snapshot.params['id']
    this.id=idactivite
    this.liste.getactivitybyId(this.Utilisateur.login,this.Utilisateur.password,idactivite).subscribe(r=>{
      this.listeactivite=r.data;
      console.log(this.listeactivite)
      this.nom=this.listeactivite.nom
    })
  }


  importAouP(){
    
    var idact=0;
    for(let i = 0; i < this.listeactivite.length; i++) {
      if(this.listeactivite[i].nom == this.idactivite) {
         this.activiteselect = this.listeactivite[i].id
         console.log(this.activiteselect)
       idact= this.listeactivite[i].id
      }
    }
    console.log(this.id)

    if(this.file==null){
      this.NoImporte("Veuillez selectionner un fichier !");

    }else{
      this.importation.ImporterlisteParticipant(this.Utilisateur.login, this.Utilisateur.password, this.file, this.libelleliste ,this.id).subscribe(chemin=>{

        this.importerliste= chemin.data;
        console.log(this.importerliste)
        if(chemin.message=="ok"){
          this.succesImport();
        }
        else{
          this.NoImporte("Erreur du serveur !");
        }
  
      })
  
    }
  }
  televerser(event:any) {
    this.file = event.target["files"][0];
  }

}
