import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntiteService } from '../services/entite/entite.service';
import { SalleServiceService } from '../services/salles/salle-service.service';

@Component({
  selector: 'app-modifier-salle',
  templateUrl: './modifier-salle.page.html',
  styleUrls: ['./modifier-salle.page.scss'],
})
export class ModifierSallePage implements OnInit {


  Utilisateur:any;

  id:number = 0;
  description:string;
  etage: any;
  libelle:string='';
  nombre: number = 0;
  disponibilite:string;
  entiteSelect: any;
  entite1!:any
  salle:any;
  entites:any;
  niveauEtage:string;
  
  alertTrue: boolean = false;
  alertFalse: boolean = false;

  constructor(private route:ActivatedRoute,private service: SalleServiceService, private serviceEntite: EntiteService) { }

  ngOnInit() {

    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur')) ;

    this.serviceEntite.getAllEntites(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour => {
      this.entites = retour.data;
      console.log(this.entites);
    });


     this.id =+this.route.snapshot.params['id']
    console.log(this.id)

    this.service.getSalleParId(this.Utilisateur.login, this.Utilisateur.password,this.id).subscribe(data=>{
      if(data.message=='ok'){
        this.salle=data.data
        //console.log(this.salle)

        this.libelle=this.salle.libelle
        this.etage=this.salle.etage
        this.description= this.salle.description
        this.nombre=this.salle.nombreplace

      }
    })

    // for(let i=0; i<this.entites.length; i++) {
    //   if(this.entites[i].nom == this.libelle) {
    //     this.entiteSelect == this.entites[i];
    //   }
    // }

   
  }



  ModifSalle(){

        if(this.etage == 0){
      this.niveauEtage = "Rez-de-chaussée"
    }
    else if(this.etage == 1){
      this.niveauEtage = this.etage + "er étage"
    }else{
      this.niveauEtage = this.etage + "ème étage"
    }
    this.service.ModifSalle(this.Utilisateur.login, this.Utilisateur.password,this.id, this.libelle,this.description, this.etage, this.nombre,this.Utilisateur).subscribe(retour=>{
      this.salle=retour.data

      if(retour.message == 'ok'){
        this.alertTrue = true
        this.alertFalse = false
      }else{
        this.alertTrue = false
        this.alertFalse = true
      }
      console.log(retour)
        })

    // this.service.ModifSalle(this.salle.id,this.libelle,this.description,this.etage,this.nombre,this.salle.disponibilite).subscribe(data=>{
    //   console.log(data)

    // });

    // console.log(this.description)
  }
}
