import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { NotificationService } from '../services/notification/notification.service';


@Component({
  selector: 'app-popup-notification',
  templateUrl: './popup-notification.page.html',
  styleUrls: ['./popup-notification.page.scss'],
})
export class PopupNotificationPage implements OnInit {
 
  constructor(private popoverCtrl:PopoverController,private notificationService:NotificationService,
    private router: Router, private route: ActivatedRoute) { }

  p: number = 1;
  Utilisateur: any;
  notif: any;
  notifTotal: any;
  id: any;
  dateNotif: any;
  descriptionNotif: any;
  titreNotif: any;
  NomCreation: any;
  nomActivite: any;
  nomCreateurActivite: any;
  prenomCreateurActivite: any;
  idNotif: any;

  // salleactivites=[
  //   {
  //     user:"Fatoumata Kalogo",
  //     activite:"activité",
  //   },
  //   {
  //     user:"Fatoumata Kalogo",
  //     activite:"activité",
  //   },
  //   {
  //     user:"Fatoumata Kalogo",
  //     activite:"activité",
  //   },
  //   {
  //     user:"Fatoumata Kalogo",
  //     activite:"activité",
  //   },
  //   {
  //     user:"Fatoumata Kalogo",
  //     activite:"activité",
  //   },
  //   {
  //     user:"Fatoumata Kalogo",
  //     activite:"activité",
  //   },
  // ]

  close(){
    this.popoverCtrl.dismiss()
  }

  ngOnInit() {
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'));

    this.notificationService.GetAllNotif(this.Utilisateur.login, this.Utilisateur.password).subscribe(data => {
      this.notif = data.data;
      console.log(this.notif);
      this.notifTotal = data.data.length;
    });

    // this.notificationService.GetNotificationById(this.Utilisateur.login, this.Utilisateur.password, this.id).subscribe(data => {
    //   this.notif = data.data;
    //   console.log("Les notifications" + this.notif);
    //   this.dateNotif = this.notif.datenotif;
    //   this.descriptionNotif = this.notif.description;
    //   this.titreNotif = this.notif.titre;
    //   this.nomActivite = this.notif.idactivite.nom;
    //   this.nomCreateurActivite = this.notif.idactivite.createur.nom;
    //   this.prenomCreateurActivite = this.notif.idactivite.createur.prenom;

    // });
  }
}

