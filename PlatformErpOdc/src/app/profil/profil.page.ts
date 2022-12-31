import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

utilisateurencours:any;
img:any;

  constructor() { }

  ngOnInit() {
    this.utilisateurencours=JSON.parse(localStorage.getItem('utilisateur'))
    console.log(this.utilisateurencours)
    if(this.utilisateurencours.image!=null){
      this.img=this.utilisateurencours.image
    }
    // console.log(this.utilisateurencours.nom)
  }

  }





  // constructor() { }

  // ngOnInit() {
  // }

