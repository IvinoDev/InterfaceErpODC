import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EntiteService } from '../services/entite/entite.service';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.page.html',
  styleUrls: ['./personnel.page.scss'],
})
export class PersonnelPage implements OnInit {
  responsive = true

  users :any
  // [
  //   {nom: "Mr Dembele", email:"idrissa@gmail.com"},
  //   {nom: "Mr SAGARA", email:"jean@gmail.com"},
  //   {nom: "Mr DIALLO", email:"abdoulaye@gmail.com"},
  //   {nom: "Mr DJENIKA", email:"abocar@gmail.com"},
  //   {nom: "Mr DJIGUIBA", email:"barema@gmail.com"},
  //   {nom: "Mr BORE", email:"souleymane@gmail.com"},
  //   {nom: "Mr DIAWARA", email:"karim@gmail.com"},
  //   {nom: "Mr BALLO", email:"ibrahim@gmail.com"},
  //   {nom: "Mr MAIGA", email:"abasse@gmail.com"},
  //   {nom: "Mr SENOU", email:"kalifa@gmail.com"},
  //   {nom: "Mr MALLE", email:"allassane@gmail.com"},
  //   {nom: "Mr TRAORE", email:"mary@gmail.com"},
  // ]
  a!:any;
  Utilisateur:any;
  longueur: any;
  Entites: any;
  textFiltre0: any;
  textFiltre: any="--Filtrer par Status--";
  intervenant: any;

  constructor(private userService:UtilisateurService,private entiteService:EntiteService,private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {

this.infos();
    

  }




  // actualisePagApresSuppresion(util:any){
  //   setTimeout(() => {
  //     this.getAllUser(util)
  //   }, 1000);
  // }
  
  // getAllUser(utilis: any){
  
  //   this.userService.getAllUsers(utilis.login,utilis.password).subscribe(data=>{
  //     this.users=data.data;
      
  //     console.log(data.data)
  //   });
  // }

//La fonction pour recuperer les details du personnel 
  RedirigerPersonnel(id:number){
    return this.router.navigate(['/dashboard/detail-personnel',id]);
    
  }

  //Filtrage fonction
  filtrebyentity(){
       //recuperation de l'id l'entite
       var identity=0 ;
       for(let i=0 ; i<this.Entites.length; i++){
        if(this.Entites[i].libelleentite==this.Entites){
          identity=this.Entites[i].id
          console.log(identity)
        }
              if(this.textFiltre0 ==this.Entites[i].libelleentite){
                this.entiteService.getAllEntites(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
                  if(data.message=='ok'){
                    this.Entites=data.data
                    console.log(this.Entites)
                  }
                })
              }
      }

  }


  

  filtreparpersonnel(){
    console.log(this.textFiltre);
    if(this.textFiltre=="Personnels internes"){
      this.userService.getAllUsers(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
        this.users=data.data;
        this.longueur=data.data.length;
        console.log(data.data)
      })
    }
    else if(this.textFiltre=="Personnels externes"){
      this.userService.getAllIntervenant(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
        this.users=data.data;
        this.longueur=data.data.length;
        console.log(data.data)
      })
    }
  }






  ionViewWillEnter(){
    this.infos()
  }


  infos(){
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'));
    console.log(this.Utilisateur)
     //!::::::::::::total perso ::::::::::::
     this.userService.getAllUsers(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      this.users=data.data;
      this.longueur=data.data.length;
      console.log(data.data)
    });

    // this.getAllUser(this.Utilisateur)



    // this.userService.getAllIntervenant(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
    //   this.intervenant=data.data;
    //   this.longueur=data.data.length;
    //   console.log(data.data)
    // })

    //Recuperation des entités
    this.entiteService.getAllEntites(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      if(data.message=='ok'){
        this.Entites=data.data
        console.log(this.Entites)
      }
    })
  }

}
