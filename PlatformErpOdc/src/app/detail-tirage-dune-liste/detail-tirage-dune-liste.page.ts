import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DetailListPostService } from '../services/detailListe/detail-list-post.service';
import { ListeService } from '../services/listes/liste.service';
import { TirageService } from '../services/tirage/tirage.service';


@Component({
  selector: 'app-detail-tirage-dune-liste',
  templateUrl: './detail-tirage-dune-liste.page.html',
  styleUrls: ['./detail-tirage-dune-liste.page.scss'],
})
export class DetailTirageDuneListePage implements OnInit {

  p: number=1;
  searchText:any;
  toustirages:any
  Utilisateur:any;
  id:any;
  listparid:any;
  listparidLength:any;
  nbrPost:number=0;
  nbrPostTirer:any;
  nbrPostTirer1:any;
  detList:any;
  dateImpList:any;
 


  constructor(private route:ActivatedRoute,
    private services: ListeService,
    private routers:Router) { }

  ngOnInit() {
    
  this.id = this.route.snapshot.params['id']
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'));
      console.log(this.Utilisateur.login)

      //liste de tous les tirages d'une liste et infos sur la liste données

    this.services.GetListeParId(this.Utilisateur.login,this.Utilisateur.password,this.id).subscribe(data=>{
     
      //libelle de la liste postulant avant tirage
      this.detList= data.data.libelle;
      console.log(this.detList);

      // date d'importation de la liste postulant
      this.dateImpList= data.data.dateimport;
      console.log(this.dateImpList);

      //nombre postulant sur la liste avant tirage
      this.nbrPost= data.data.postulants.length;
      console.log(this.nbrPost);
     
      //liste de tous les tirages faite sur un liste données
      this.listparid=data.data.tirages; 
      this.listparidLength=data.data.tirages.length
      console.log(this.listparid);
      console.log(this.listparidLength);
      
    
    })
  }

  
  goResultatTirage(idT:number){
    console.log(idT);
    return this.routers.navigate(['detail-tirage', idT])
  }

  
 


}
