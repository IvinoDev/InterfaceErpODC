import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../services/activite/activite.service';
import * as XLSX from "xlsx"
import Swal from 'sweetalert2';
import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';

@Component({
  selector: 'app-detailactivity',
  templateUrl: './detailactivity.page.html',
  styleUrls: ['./detailactivity.page.scss'],
})
export class DetailactivityPage implements OnInit {

  pages!: any;
  a!: any
  activite: any;
  Utilisateur: any;
  nom: any

  Status: any
  image: any
  salles: any = null;
  leadnom: any
  leadprenom: any
  suppvar: any
  updatevar: any
  postulants: any
  dateDebut: any
  dateFin: any
  description: any


  aaa: any
  idact: any
  byentity: any
  nombreLingne: any
  nombreLingne1 = 8;
  salleid: any;
  delpost: any;
  nomCreateur: any;
  prenomCreateur: any;
  formateursExter: any;
  formateursInter: any;

//act a venir rediriger vers son detail()id
  constructor(private activiteservice:ActiviteService,private navv:NavController, private route:ActivatedRoute, private router:Router) { }

  id: any;


  ngOnInit() {

    const idactivite = this.route.snapshot.params['id']
    this.id = idactivite
    this.Utilisateur = JSON.parse(localStorage.getItem('utilisateur'))
    this.idact = idactivite
    //console.log(idactivite)
    console.log("recuperation de l'utilisateur " + this.Utilisateur)
    this.activiteservice.getactivitybyId(this.Utilisateur.login, this.Utilisateur.password, idactivite).subscribe(r => {
      this.activite = r.data;
      console.log(this.activite)
      this.nom = this.activite.nom
      this.description = this.activite.description
      if (this.activite.salle != null) {
        this.salles = this.activite.salle.libelle
        this.salleid = this.activite.salle.id

      }
      this.leadnom = this.activite.leader.nom
      this.leadprenom = this.activite.leader.prenom
      this.image = this.activite.image
      this.dateDebut = this.activite.dateDebut
      this.dateFin = this.activite.dateFin
      this.nomCreateur=this.activite.createur.nom
      this.prenomCreateur=this.activite.createur.prenom
      this.formateursExter=this.activite.intervenantExternes
      this.formateursInter=this.activite.utilisateurs

      console.log(this.activite.createur.nom)
    })

    this.activiteservice.GetActiviteStatut(this.Utilisateur.login, this.Utilisateur.password, idactivite).subscribe(r => {
      console.log(r)
      this.Status = r.message;
      console.log(this.Status)
    })

    this.activiteservice.getallpostulantsbyidact(this.Utilisateur.login, this.Utilisateur.password, idactivite).subscribe(r => {
      console.log(r)
      this.postulants = r.data;
      this.nombreLingne = this.postulants.length
      console.log(this.postulants)

    })

    this.activiteservice.getactivitybyId(this.Utilisateur.login, this.Utilisateur.password, idactivite).subscribe(r => {
      console.log(r)
      this.byentity = r.message;
      console.log(this.byentity)
    })

  }

  envoyernombre() {

    this.nombreLingne1 = this.nombreLingne

  }
  //l'id a appliquer au tableau
  id1 = "season-tble"
  name = 'ExcelSheet.xlsx';
  exportToExcel(): void {
    this.nombreLingne1 = this.nombreLingne
    setTimeout(() => {
      let element = document.getElementById('season-tble');
      const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

      const book: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

      XLSX.writeFile(book, this.name);
      this.nombreLingne1 = 8

    }, 1000);
  }
  succesImport() {
      Swal.fire({
        title: "Attention vous etes sûr de vouloir SUPPRIMER cette activité",
        showConfirmButton: true,
        confirmButtonText: "Oui",
        confirmButtonColor: 'green',
        showCancelButton: true,
        cancelButtonText: "Non",
        cancelButtonColor: 'red',
        heightAuto: false
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire({
            title: " Suppression definitive?",
            showConfirmButton: true,
            confirmButtonText: "Confirmer",
            confirmButtonColor: 'green',
            showCancelButton: true,
            cancelButtonText: "Annuler",
            cancelButtonColor: 'red',
            heightAuto: false
          }).then((result) => {
            if (result.isConfirmed) {
              this.supprimeractivite()
              this.router.navigateByUrl('/dashboard/allactivity', {skipLocationChange: true}).then(() => {
                this.router.navigate(["/dashboard/allactivity"])
              })
          }else if(result.isDenied) {
            Swal.fire('Suppression annuler !');
          }

        });
      }else if (result.isDenied) {
        // Swal.fire('Changes are not saved', '', 'info');
      }
    });


    }

  supprimeractivite() {
    this.activiteservice.deletebyid(this.Utilisateur.login, this.Utilisateur.password, this.idact).subscribe(
      d => {
        console.log(d)
      this.suppvar=d.message;
      console.log(this.suppvar)
      }
    );

  }
  //////////////////////////////supppostulant

  successsuppost() {
    Swal.fire({
      title: "Attention vous etes sûr de vouloir SUPPRIMER cet postulant",
      showConfirmButton: true,
      confirmButtonText: "Oui",
      confirmButtonColor: 'green',
      showCancelButton: true,
      cancelButtonText: "Non",
      cancelButtonColor: 'red',
      heightAuto: false
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire({
          title: " Suppression definitive?",
          showConfirmButton: true,
          confirmButtonText: "Confirmer",
          confirmButtonColor: 'green',
          showCancelButton: true,
          cancelButtonText: "Annuler",
          cancelButtonColor: 'red',
          heightAuto: false
        }).then((result) => {
          if (result.isConfirmed) {
            this.supppostulant()
            // this.router.navigateByUrl('/dashboard/allactivity', {skipLocationChange: true}).then(() => {
            //   this.router.navigate(["/allactivity"])
            // })
        }else if(result.isDenied) {
          Swal.fire('Suppression annuler !');
        }

      });
    }else if (result.isDenied) {
      // Swal.fire('Changes are not saved', '', 'info');
    }
  });


  }

  supppostulant(){
    this.activiteservice.delpost(this.Utilisateur.login,this.Utilisateur.password,this.idact).subscribe(
      d=>{
        console.log(d)
        this.delpost=d.message;
        console.log(this.delpost)
        //this.ngOnInit()
      }
    )

  }
  update() {
    this.activiteservice.updatebyid(this.Utilisateur.login, this.Utilisateur.password, this.idact).subscribe(
      d => {
        console.log(d)
        this.updatevar = d.message;
        console.log(this.updatevar)
      }
    )
  }


  ionViewWillEnter(){
    const idactivite = this.route.snapshot.params['id']
    this.id = idactivite
    this.Utilisateur = JSON.parse(localStorage.getItem('utilisateur'))
    this.idact = idactivite
    console.log("recuperation de l'utilisateur " + this.Utilisateur)
    this.activiteservice.getactivitybyId(this.Utilisateur.login, this.Utilisateur.password, idactivite).subscribe(r => {
      this.activite = r.data;
      console.log(this.activite)
      this.nom = this.activite.nom
      this.description = this.activite.description
      if (this.activite.salle != null) {
        this.salles = this.activite.salle.libelle
        this.salleid = this.activite.salle.id

      }
      this.leadnom = this.activite.leader.nom
      this.leadprenom = this.activite.leader.prenom
      this.image = this.activite.image
      this.dateDebut = this.activite.dateDebut
      this.dateFin = this.activite.dateFin

      this.nomCreateur=this.activite.createur.nom
      this.prenomCreateur=this.activite.createur.prenom
      console.log(this.activite.createur.nom)
    })

    this.activiteservice.GetActiviteStatut(this.Utilisateur.login, this.Utilisateur.password, idactivite).subscribe(r => {
      console.log(r)
      this.Status = r.message;
      console.log(this.Status)
    })

    this.activiteservice.getallpostulantsbyidact(this.Utilisateur.login, this.Utilisateur.password, idactivite).subscribe(r => {
      console.log(r)
      this.postulants = r.data;
      this.nombreLingne = this.postulants.length
      console.log(this.postulants)

    })

    this.activiteservice.getactivitybyId(this.Utilisateur.login, this.Utilisateur.password, idactivite).subscribe(r => {
      console.log(r)
      this.byentity = r.message;
      console.log(this.byentity)
    })
  }


  //en attente back
  importerliste() {

  }







}
