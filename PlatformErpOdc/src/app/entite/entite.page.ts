import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AccueilserviceService } from '../services/acceuil/accueilservice.service';

import { EntiteService } from '../services/entite/entite.service';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailentiteService } from '../services/detailsentit/detailentite.service';
import Swal from 'sweetalert2';
// import { NouvelleEntitePage } from '../nouvelle-entite/nouvelle-entite.page';

@Component({
  selector: 'app-entite',
  templateUrl: './entite.page.html',
  styleUrls: ['./entite.page.scss'],
})

export class EntitePage implements OnInit {
  modelData: any;
  alertTrue: boolean = false;
  alertFalse: boolean = false;

  statusResponsable: any;
  nomEntite: any;
  nomResponsable: any;
  descriptionEntite: any;
  prenomResponsable: any;
  imageEntite: any;
  nomEntite1: any;
  descriptionEntite1: any;
  libelleentiteMo: any;
  descriptionMo: any;
  responsableEntiteMo: any;
  idEntite: any;
  imageentite1: any;

  constructor(private entitedetailservice: DetailentiteService, private entiteService: EntiteService, private acceuilService: AccueilserviceService,
    private userService: UtilisateurService, private router: Router, private route: ActivatedRoute) { }

  longueur: any

  Utilisateur: any;
  donneEntite: any;
  libelleentite: any;
  description: any;
  imageentite: any;
  toutUtilisateur: any;
  responsableEntite: any;
  lead: any;
  donner: any

  entites: any;
  ngOnInit() {
    this.Utilisateur = JSON.parse(localStorage.getItem('utilisateur'));
    console.log("recuperantion l'utilisateur" + this.Utilisateur)
    this.allEntite();
    //console.log(this.getAllEntite())
    this.userService.getActivesUsers(this.Utilisateur.login, this.Utilisateur.password).subscribe(data => {
      this.toutUtilisateur = data.data;

      console.log(data.data[1].nom)

    })

    

  }

  popUp() {
    Swal.fire({
      title: 'Félicitation !!',
      text: 'Entité créée avec succes',
      heightAuto: false,
      showConfirmButton: true,
      confirmButtonText: "D'accord",
      confirmButtonColor: '#FF7900',
      showDenyButton: false,
      showCancelButton: false,
      allowOutsideClick: false
    })
  }

  //Methode permettant de recuperer les entite

  getAllEntite(): any {
    this.entiteService.getAllEntites(this.Utilisateur.login, this.Utilisateur.password).subscribe(data => {
      if (data.message == 'ok') {
        this.entites = data.data
        this.longueur = data.data.length
        console.log(data.data)
      }
    })


  }




  recuperationImage(event: any) {

    this.imageentite = event.target["files"][0];
    console.log(this.imageentite)
  }
  recuperationImage1(event: any) {

    this.imageentite1 = event.target["files"][0];
    console.log(this.imageentite)
  }
  //Redirection voir +

  RedirigerEntite(id: number) {
    return this.router.navigate(['/dashboard/entite/details-entite', id]);

  }

  // methode permettant de creer une entite
  alet(): void {
    setTimeout(() => {
      this.getAllEntite();
    }, 1000);
  }

  postAllEntite() {
    // this.alertTrue = false
    // this.alertFalse = false
    console.log(this.imageentite + " libelleentite : " + this.libelleentite + "description : " + this.description + "responsable : " + this.responsableEntite)
    for (let i = 0; i < this.toutUtilisateur.length; i++) {

      const array = this.responsableEntite.split(' ')

      if (this.toutUtilisateur[i].prenom == array[0] && this.toutUtilisateur[i].nom == array[1]) {
        this.lead = this.toutUtilisateur[i]
      }
    }
    if (this.entites.length == 0) {
      this.entiteService.PostEntite(this.Utilisateur.login, this.Utilisateur.password, this.imageentite, this.libelleentite, this.description, this.Utilisateur, this.lead).subscribe(data => {
        console.log(data);
        this.donner = data
        if (this.donner.message == 'ok') {
          // this.alertTrue = true
          // this.alertFalse = false
          this.popUp()
        } else {
          this.alertTrue = false
          this.alertFalse = true
        }
      })
      this.alet();
    } else {
      for (let index = 0; index < this.entites.length; index++) {
        if (this.lead.nom == this.entites[index].gerant.nom && this.lead.prenom == this.entites[index].gerant.prenom) {
          Swal.fire({
            title: 'Alerte',
            text: 'Cette personne est déjà responsable d\'une entité',
            heightAuto: false,
            showConfirmButton: true,
            confirmButtonText: "OK",
            confirmButtonColor: '#FF7900',
            showDenyButton: false,
            showCancelButton: false,
            allowOutsideClick: false
          })
        } else {
          this.entiteService.PostEntite(this.Utilisateur.login, this.Utilisateur.password, this.imageentite, this.libelleentite, this.description, this.Utilisateur, this.lead).subscribe(data => {
            console.log(data);
            this.donner = data
            if (this.donner.message == 'ok') {
              // this.alertTrue = true
              // this.alertFalse = false
              this.popUp()
            } else {
              this.alertTrue = false
              this.alertFalse = true
            }
          })
          this.alet();
        }

      }

    }


    // this.presentAlert()
  }



  allEntite() {
    console.log("zzzz")
    this.entiteService.getAllEntites(this.Utilisateur.login, this.Utilisateur.password).subscribe(data => {
      if (data.message == 'ok') {
        this.entites = data.data
        this.longueur = data.data.length
        console.log("nos entites " + data.data)
      }
    })

  }
  //Methode permettant de d'afficher le popup modifier 

  isModalOpen = false;

  setOpen(isOpen: boolean, id: any) {
    this.isModalOpen = isOpen;
    console.log("________________________")
    console.log(this.Utilisateur.login)
    console.log(id)
    // this.getEntiteParId(id);
    this.idEntite = id
    this.entitedetailservice.voirdetailsEntiteid(this.Utilisateur.login, this.Utilisateur.password, id).subscribe(data => {
      this.entites = data.data
      console.log(this.entites.libelleentite)
      this.libelleentiteMo = this.entites.libelleentite
      // this.statusResponsable = this.entites.createur.role.libellerole
      this.descriptionMo = this.entites.description
      console.log(this.descriptionEntite1)
      // this.nomResponsable = this.entites.gerant.nom
      // this.prenomResponsable = this.entites.gerant.prenom
      // this.imageEntite = this.entites.image
    })
  }
  setClose() {
    this.isModalOpen = false;
  }
  //Methode permettant de Modifier une entite
  modifierEntite() {
    for (let i = 0; i < this.toutUtilisateur.length; i++) {

      const array = this.responsableEntiteMo.split(' ')

      if (this.toutUtilisateur[i].prenom == array[0] && this.toutUtilisateur[i].nom == array[1]) {
        this.lead = this.toutUtilisateur[i]
      }
    }
    this.entiteService.updateEntiteById(this.Utilisateur.login, this.Utilisateur.password, this.idEntite, this.imageentite1, this.libelleentiteMo, this.descriptionMo, this.Utilisateur, this.lead).subscribe(data => {

      console.log(data)
    })
    this.alet();
  }

  supprimerEntite(id: any) {

    this.entiteService.deleteEntiteById(this.Utilisateur.login, this.Utilisateur.password, id).subscribe(data => {
      console.log("sssssssssssssssssssssssssssssss")
      console.log(data)
    })
  }






}
