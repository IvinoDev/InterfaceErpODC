import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DetailDesListesPage } from '../detail-des-listes/detail-des-listes.page';
import { SalleServiceService } from '../services/salles/salle-service.service';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.page.html',
  styleUrls: ['./salle.page.scss'],
})
export class SallePage implements OnInit {

  sallesSupp:any;
  sallesDipo:any;
  sallesDipoLength:any;
  sallesIndispoLength:any
  url="/modifier-salle"
  id: number = 0;

  sallesIndispo:any;
  Utilisateur:any;
  constructor(private userService:UtilisateurService,private salleService:SalleServiceService, private route:ActivatedRoute,  private router: Router) { }
  ngOnInit() {
    //  this.id =+this.route.snapshot.params['id']
    console.log(this.id)

    // this.id =+this.route.snapshot.params['id']
    
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'));

     //!::::::::::::total perso ::::::::::::

    this.callSalle()

  }

  callSalle(){
    this.salleService.getSalleDisponible(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      this.sallesDipo=data.data;
      this.sallesDipoLength = data.data.length
      console.log(data.data)
    });

   
    this.salleService.getSallesIndispo(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      this.sallesIndispo=data.data;
      this.sallesIndispoLength = data.data.length
      console.log(data.data)
    });

  }


 


  popDeleteSalle(idSalle:number){
    
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
        this.salleService.deleteSalle(this.Utilisateur.login,this.Utilisateur.password,idSalle).subscribe(data=>{
          if(data.message=="ok"){
            this.callSalle()
          }
        });
       
      } else if (result.isDenied) {
        //Swal.fire('Changes are not saved', '', 'info');
      //  this.route.navigate(['tirage'])
      }
    });
 
  }

  ionViewWillEnter(){
    this.callSalle();
  }
}
