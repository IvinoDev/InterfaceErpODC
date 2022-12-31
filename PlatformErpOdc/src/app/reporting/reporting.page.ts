import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActiviteService } from '../services/activite/activite.service';
import { EntiteService } from '../services/entite/entite.service';
// telecharger fichier excel
import * as XLSX from 'xlsx';
import { TypeActiviteService } from '../services/typeActivite/type-activite.service';

@Component({

  selector: 'app-reporting',
  templateUrl: './reporting.page.html',
  styleUrls: ['./reporting.page.scss'],
})
export class ReportingPage implements OnInit {
  a:any;
  accueil:any;
  utilisateur : any;
  activites : any;
  entites : any;
  nomactivite : any;
  typeactivite : any;
  entiteselect : any;
  datedebut : Date;
  datefin : Date;
  listetp: any;
  constructor(private serviceactivite : ActiviteService, private serviceentite : EntiteService, private modalController : ModalController, private typeact : TypeActiviteService) { }

  ngOnInit() {
    this.utilisateur = JSON.parse(localStorage.getItem('utilisateur'))
    this.serviceactivite.GetTtActivite(this.utilisateur.login,this.utilisateur.password).subscribe(
      reponse => {
        this.activites = reponse.data;
        console.log(this.activites)
      }
    )
    this.serviceentite.getAllEntites(this.utilisateur.login,this.utilisateur.password).subscribe(
      reponse => {
        this.entites = reponse.data
        console.log(this.entites)
      }
    )
    this.typeact.getListe(this.utilisateur.login, this.utilisateur.password).subscribe(
      reponse => {
        this.listetp = reponse.data;
      }
    )
  }
  filtrerActivite() {
    console.log(this.nomactivite)
    console.log(this.typeactivite)
    console.log(this.entiteselect)
    console.log(this.datedebut)
    console.log(this.datefin)
    this.serviceactivite.getFiltre(this.utilisateur.login, this.utilisateur.password, this.nomactivite, this.typeactivite, this.entiteselect, this.datedebut, this.datefin).subscribe({
      next: reponse => {
        this.activites = reponse.data;
        console.log(this.activites)
      },
      error: reponse => {
        alert(reponse)
      }
    })
    this.modalController.dismiss();

  }

  name = 'ExcelSheet.xlsx';
  exportToExcel(): void {
    let element = document.getElementById('season-tble');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  }
}
