import { ActiviteService } from './../services/activite/activite.service';
import { EntiteService } from './../services/entite/entite.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liaisonsalle',
  templateUrl: './liaisonsalle.page.html',
  styleUrls: ['./liaisonsalle.page.scss'],
})
export class LiaisonsallePage implements OnInit {
  p:number = 1;
  actwithoutsalle:any
  longueur:any
  Utilisateur:any
  id:any
  listeactivite:any
  actid: any;
  unesalle: any;

  constructor(private route:ActivatedRoute,private entiteService:EntiteService,private service:ActiviteService) { }

  ngOnInit() {
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'));
    console.log(this.Utilisateur)
    //console.log(this.Utilisateur.password)
    this.service.GetTtActivitewithoutsalle(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      console.log(data.message)
      if(data.message =="ok"){
        this.actwithoutsalle=data.data;
        this.longueur=data.data.length
        console.log(this.actwithoutsalle)


      }else{
        this.actwithoutsalle="Aucune activité sans Salle"
      }

    })

  }
  attribueractivite(idact1:any){
    const idsalle=this.route.snapshot.params['id']
    this.id=idsalle
    console.log(idact1)
    console.log(this.id)

    this.service.attributionservice(this.Utilisateur.login,this.Utilisateur.password,idsalle,idact1).subscribe(r=>{
      this.unesalle=r.data;
      console.log(this.unesalle)
    })


  }

}
