import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TachedesignationService } from '../services/tahedesignations/tachedesignation.service';

@Component({
  selector: 'app-tachedesignation',
  templateUrl: './tachedesignation.page.html',
  styleUrls: ['./tachedesignation.page.scss'],
})
export class TachedesignationPage implements OnInit {
  a!:any
  id:number
  taches:any
  Utilisateur:any;
  p:any
  constructor(private route:ActivatedRoute, private tachedesignationService:TachedesignationService) { }

  ngOnInit() {

     this.id=this.route.snapshot.params['id'];
     this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur')) ;
    this.callTaches()

     this.callTaches()
     this.tachedesignationService.getAlltaches(this.Utilisateur.login, this.Utilisateur.password,this.id).subscribe(retour => {
      this.taches = retour.data;
      console.log(this.taches);
    });

   

    this.tachedesignationService.getAlltaches(this.Utilisateur.login, this.Utilisateur.password,this.id).subscribe(retour => {
      this.taches = retour.data;
      console.log(this.taches);
    });
  }
  ionViewWillEnter(){
    this.callTaches()
  }

  popDeleteTache(id:number){
    
    Swal.fire({
      position:'center',
      title: 'Voulez-vous supprimer ?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Oui',
      denyButtonText: `Non`,
      imageUrl:'../../assets/images/alert.gif',
      imageWidth:'100px',
      imageHeight:'100px',
      denyButtonColor:'red',
      // cancelButtonText: 'Annuler',
      cancelButtonColor:'red',
      confirmButtonColor: 'green',
      heightAuto: false,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        //Swal.fire('Saved!', '', 'success');
        this.tachedesignationService.deleteTache(this.Utilisateur.login,this.Utilisateur.password,id).subscribe(data=>{
          // if(data.message=="ok"){
          //   this.callTaches()
          // }
          this.callTaches()
        });
       
      } else if (result.isDenied) {
        //Swal.fire('Changes are not saved', '', 'info');
      //  this.route.navigate(['tirage'])
      }
    });
 
  }
  callTaches(){
    
    this.tachedesignationService.getAlltaches(this.Utilisateur.login, this.Utilisateur.password,this.id).subscribe(retour => {
      this.taches = retour.data;
      console.log(this.taches);
    });
  }
  

}

