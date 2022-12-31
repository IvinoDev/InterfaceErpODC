import { ActiviteService } from './../services/activite/activite.service';
import { EntiteService } from './../services/entite/entite.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activites',
  templateUrl: './activites.page.html',
  styleUrls: ['./activites.page.scss'],
})
export class ActivitesPage implements OnInit {
  p:number = 1;
  touteactivite:any;
  Utilisateur:any;
  longueur:any;
  allentity:any;
  /////////variables pour les filtres
  actencour:any
  actevenir:any
  actterminer:any

  textFiltre:any;
  textFiltre0:any

  constructor(private route:ActivatedRoute,private router: Router,private entiteService:EntiteService,private service:ActiviteService) { }

  ngOnInit() {

    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'));
    console.log(this.Utilisateur)
    //console.log(this.Utilisateur.password)
    this.service.GetTtActivite(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      console.log(data.message)
      if(data.message =="ok"){
        this.touteactivite=data.data;
        this.longueur=data.data.length
        console.log(this.touteactivite)
      }else{
        this.touteactivite="Aucune activité enregistrée"
      }

    })

//recuperrer tout les entites
    this.entiteService.getAllEntites(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour=>{
      this.allentity=retour.data
      console.log(this.allentity)
    })
  }


  filtrebyentity(){
    //recuperation de l'id l'entite
     var identity=0 ;
    for(let i=0 ; i<this.allentity.length; i++){
     if(this.allentity[i].libelleentite==this.allentity){
       identity=this.allentity[i].id
       console.log(identity)
     }
           if(this.textFiltre0 ==this.allentity[i].libelleentite){
             this.service.GetActivitebyentite(this.Utilisateur.login, this.Utilisateur.password,identity).subscribe(retour=>{
               this.allentity=retour.data
               console.log(this.allentity)
             })
           }
   }


  }

   activitesavenir(){
     console.log(this.textFiltre);

     if(this.textFiltre=="Activités en cour"){
       this.service.GetActivitencour(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
         this.touteactivite=data.data;
         this.longueur=data.data.length
         console.log(data)
       })
     }else if(this.textFiltre=="Activités à venir"){
       this.service.GetActiviteavenir(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
         this.touteactivite=data.data;
         this.longueur=data.data.length
         console.log(data)
       })
     }else if(this.textFiltre=="Activités Terminées"){
       this.service.GetActiviteterminer(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
         this.touteactivite=data.data;
         this.longueur=data.data.length
         console.log(data)
       })
     }

   }

 }





