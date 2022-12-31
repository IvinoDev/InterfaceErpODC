import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-supprimerpersonnel',
  templateUrl: './supprimerpersonnel.page.html',
  styleUrls: ['./supprimerpersonnel.page.scss'],
})
export class SupprimerpersonnelPage implements OnInit {


  @Input() model_title : string;
  constructor(private modalController:ModalController) { }
  ngOnInit() {
  }


  async closeModel(){
    const close :string = "Modal Removed";
    await this.modalController.dismiss(close);
  }

}
