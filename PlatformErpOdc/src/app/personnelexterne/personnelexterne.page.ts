import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntiteService } from '../services/entite/entite.service';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-personnelexterne',
  templateUrl: './personnelexterne.page.html',
  styleUrls: ['./personnelexterne.page.scss'],
})
export class PersonnelexternePage implements OnInit {

  responsive = true

  users :any;
  a!:any;
  Utilisateur:any;
  longueur: any;
  Entites: any;
  textFiltre0: any;
  intervenant: any;

  constructor(private userService:UtilisateurService,private entiteService:EntiteService,private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {


    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'));
    console.log(this.Utilisateur)
     //!::::::::::::total perso ::::::::::::
     this.userService.getAllUsers(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      this.users=data.data;
      this.longueur=data.data.length;
      console.log(data.data)
    });

     //!::::::::::::total perso ::::::::::::
     this.userService.getAllIntervenant(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      this.intervenant=data.data;
      this.longueur=data.data.length;
      console.log(data.data)
    });

  }


//La fonction pour recuperer les details du personnel 
  // RedirigerPersonnel(id:number){
  //   // return this.router.navigate(['/dashboard/detail-personnel',id]);
    
  // }

  

}