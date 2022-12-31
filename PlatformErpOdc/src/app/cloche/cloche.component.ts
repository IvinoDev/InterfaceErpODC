import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopupNotificationPage } from '../popup-notification/popup-notification.page';
import { NotificationService } from '../services/notification/notification.service';

@Component({
  selector: 'app-cloche',
  templateUrl: './cloche.component.html',
  styleUrls: ['./cloche.component.scss'],
})
export class ClocheComponent implements OnInit {
nombre:any
Utilisateur:any
notif:any
  notifTotal: any;
  constructor(private router: Router,private popoverCtrl: PopoverController,private notificationService:NotificationService) { }
 


  ngOnInit() {
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur'));
    
    this.notificationService.GetAllNotif(this.Utilisateur.login, this.Utilisateur.password).subscribe(retour=>{
          this.notif=retour.data;
          console.log(this.notif)
          this.notifTotal=retour.data.length
          console.log(this.notif)
        })
  }
  

  async OpenNotification(id){
    // this.router.navigate((['tabs',"message",id]));
      const popover = await this.popoverCtrl.create({
        component:PopupNotificationPage,
        event:id,
        cssClass:"notif-popup"
      });
      await popover.present()
  }


}
