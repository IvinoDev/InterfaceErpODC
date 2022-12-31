import { Component, Input, OnInit } from '@angular/core';
import { CheckboxCustomEvent, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-desactiverpersonnel',
  templateUrl: './desactiverpersonnel.page.html',
  styleUrls: ['./desactiverpersonnel.page.scss'],
})
export class DesactiverpersonnelPage implements OnInit {

  // canDismiss = false;

  // presentingElement = null;

  @Input() model_title : string;
  constructor(private modalController:ModalController) { }
  // constructor() { }
  ngOnInit() {
  }

  // ngOnInit() {
  //   this.presentingElement = document.querySelector('.ion-page');
  // }

  async closeModel(){
    const close :string = "Modal Removed";
    await this.modalController.dismiss(close);
  }

  // onTermsChanged(event: Event) {
  //   const ev = event as CheckboxCustomEvent;
  //   this.canDismiss = ev.detail.checked;
  // }

}
