import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { ListeService } from '../services/listes/liste.service';
import { TirageService } from '../services/tirage/tirage.service';

@Component({
  selector: 'app-popupdtirage',
  templateUrl: './popupdtirage.page.html',
  styleUrls: ['./popupdtirage.page.scss'],
})
export class PopupdtiragePage implements OnInit {
  a : number=1;
  date = new Date();
  tirage: any;
  TirageSelect: any;activite
  idtira: any;
  tiraget: any;
idtirage: any;
  constructor(private modalController: ModalController,private tirageService:TirageService,private navCltr:NavController,private route:ActivatedRoute,private router:Router) { }
  @Input() valider: boolean;

  
  
  Utilisateur;
  data;

  postulantTires: any;
  
  
  ngOnInit() {
    console.log(this.data);
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur')) ;

    this.tirageService.AllPostulantsByTirage(this.Utilisateur.login, this.Utilisateur.password,this.data.id).subscribe(donnee=>{
      this.postulantTires=donnee.data
      console.log(this.postulantTires)
    })
  }

  async validerPopup() {
    Swal.fire({
      title:'Tirage Valider',
      icon:'success',
      heightAuto: false,
      confirmButtonColor:'#FF7900',
      allowOutsideClick:false
  }).then(()=>{
    this.router.navigateByUrl('/detailactivite', {skipLocationChange: true}).then(() => {
      this.router.navigate(["/detailactivite",this.data.activite.id]);
      });
  })
  await this.modalController.dismiss(close);
  }
  ValiderT(idtirage){
    const retour=this.data.id

    
    // console.log(this.data)
    // for(let i=0;i<retour.length;i++){
    //   this.tiraget=retour[i].tirage
    //   console.log(this.tiraget)
    // }
    // console.log(this.tiraget)
    this.tirageService.ValiderTirage(this.Utilisateur.login, this.Utilisateur.password,this.data.id).subscribe(donnee=>{
      this.tirage=donnee.data
      console.log(this.tirage)
    })
    this.validerPopup()
  }

  async annulerPopup() {
    const close: string = "Tirage annulé !";
    await this.modalController.dismiss(close);
    this.valider = false
    //alert(close)
  }


  
}
