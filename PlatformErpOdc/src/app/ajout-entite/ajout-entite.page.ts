import { Component, OnInit } from '@angular/core';
import { EntiteService } from '../services/entite/entite.service';
import { SalleServiceService } from '../services/salles/salle-service.service';

@Component({
  selector: 'app-ajout-entite',
  templateUrl: './ajout-entite.page.html',
  styleUrls: ['./ajout-entite.page.scss'],
})
export class AjoutEntitePage implements OnInit {
  Utilisateur: any;
  description:String="";
  libelleentite:String="";
  constructor(private service : SalleServiceService,private entiteService : EntiteService) { }

  ngOnInit() {
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'));

  }

 
  // AjoutEntite(){
  //   this.service.ajoutEntite(this.description,this.libelleentite).subscribe(data=>{
  //     console.log(data)

  //   });
  // }

// ToutEntite(){
//   this.service.ToutEntite().subscribe(data=>{
//     console.log(data)
//   }
// );
// }
  ToutEntite(){
    this.entiteService.getAllEntites(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      console.log(data)
    });
  }
}
