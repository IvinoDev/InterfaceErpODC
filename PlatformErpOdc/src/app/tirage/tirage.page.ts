import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { PopupdtiragePage } from '../popupdtirage/popupdtirage.page';
import { ActiviteService } from '../services/activite/activite.service';
import { ListeService } from '../services/listes/liste.service';
import { TirageService } from '../services/tirage/tirage.service';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.page.html',
  styleUrls: ['./tirage.page.scss'],
})
export class TiragePage implements OnInit {
  
  listes: any;
  nom: any;
  Utilisateur:any;
  modelData: any;

  libelletirage:any;
  idactivite:any;
  libelleListe:any;
  activiteSelect: any;
  nombre:any;
  postulant: any;
  


  constructor(private tirageService: TirageService,public modalController: ModalController,private listeService:ListeService,private activiteService:ActiviteService,private toastCtrl: ToastController) { }
 
  async ouvrirPopup(data) {
    const modal = await this.modalController.create({
      component: PopupdtiragePage,
      componentProps: {
        'data': data,
        
      },
      backdropDismiss: false
    });
    // modal.onDidDismiss().then((modelData)=>{
    //   if (modelData !== null) {
    //     this.modelData = this.modelData.data;
    //     // console.log('Les données du Pop Up sont : ' + modelData.data);
    //   }
    // });
    return await modal.present();
  }
  async popupExist() {
    Swal.fire({
      title:'Desolé',
      text:'Ce tirage existe déjà',
      icon:'error',
      heightAuto: false,
      confirmButtonColor:'#FF7900'
  });

  }
 
  popupDepasse() {
      Swal.fire({
        title:'Desolé',
        text:'Le nombre entré est superieur au nombre de postulant sur la liste',
        icon:'error',
        heightAuto: false,
        confirmButtonColor:'#FF7900'
    });
  }
  popupEgal() {
      Swal.fire({
        title:'Desolé',
        text:'Le nombre entré est égal au nombre de postulant sur la liste',
        icon:'error',
        heightAuto: false,
        confirmButtonColor:'#FF7900'
    });
  }


  ngOnInit() {
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur')) ;
    this.listeService.GetAllListe(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour=>{
      this.listes=retour.data
      console.log(this.listes)
    })

      this.activiteService.GetAllActiviteSansPartcipant(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour=>{
      this.nom=retour.data;
      console.log(this.nom)
    })
  }
  FaireTirage(){

    for(let i=0;i<this.nom.length;i++){
      if(this.nom[i].nom==this.idactivite){
        this.activiteSelect=this.nom[i]
        console.log(this.activiteSelect)
      }
    }
    

    this.tirageService.doTirage(this.Utilisateur.login, this.Utilisateur.password,this.libelleListe,this.nombre,this.libelletirage).subscribe(retour=>{
      if(retour.message=='ok'){
        console.log(retour)
        this.ouvrirPopup(retour.data)
        console.log(retour.data)

        
      }else{
        if(retour.message=="error"){
          console.log(retour)
          this.popupExist()
        }
        if(retour.data=="Nombre de postulants insufusant !"){
          console.log(retour)
          this.popupDepasse()
        }
        if(retour.data=="Index 3 out of bounds for length 3"){
          this.popupEgal()
        }
        
        
      }
      
    })
    
  }

}
