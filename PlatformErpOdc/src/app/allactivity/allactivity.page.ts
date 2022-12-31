import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { AccueilserviceService } from '../services/acceuil/accueilservice.service';
import { ActiviteService } from '../services/activite/activite.service';
import { OrderModule } from 'ngx-order-pipe';
import { EntiteService } from '../services/entite/entite.service';
@Component({
  selector: 'app-allactivity',
  templateUrl: './allactivity.page.html',
  styleUrls: ['./allactivity.page.scss'],
})
export class AllactivityPage implements OnInit {

  p:number = 1;
  touteactivite:any;
  Utilisateur:any;
  longueur:any;
  allentity:any;
  /////////variables pour les filtres
  actencour:any
  actevenir:any
  actterminer:any

  filtreEntity:any="Filtrer par Entité";
  textFiltre:any="Filtrer par Status";
  textFiltre0:any
  constructor(private route:ActivatedRoute,private router: Router,private entiteService:EntiteService,private service:ActiviteService) { }


  ngOnInit(){
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'));
    console.log(this.Utilisateur)
    //location.reload()
    //console.log(this.Utilisateur.password)
    
    this.AllActivite();
//recuperrer tout les entites
    this.entiteService.getAllEntites(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour=>{
      this.allentity=retour.data
      console.log(this.allentity)
    })


  }


  filtrebyentity(){
   //recuperation de l'id l'entite
    var identity=null ;
    console.log(this.filtreEntity)
   for(let i=0 ; i<this.allentity.length; i++){
    if(this.allentity[i].libelleentite==this.filtreEntity){
      identity=this.allentity[i].id
      console.log(identity)
    }
    
       
      
  }

  try {
    if(identity!=null){
      this.service.GetActivitebyentite(this.Utilisateur.login, this.Utilisateur.password,identity).subscribe(retour=>{
        this.touteactivite=retour.data
        console.log(this.allentity)
      })
    }
    
  } catch (error) {
    
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
    }else{
      this.AllActivite()
    }

  }


  AllActivite(){
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
  }

  ionViewWillEnter(){
    this.AllActivite()
  }

}
