import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../services/activite/activite.service';
import { EntiteService } from '../services/entite/entite.service';
import * as XLSX from 'xlsx';
import { ListeparticipantService } from '../services/listeparticipants/listeparticipant.service';
import { ModalController } from '@ionic/angular';
import { TypeActiviteService } from '../services/typeActivite/type-activite.service';

@Component({
  selector: 'app-reporting-participant',
  templateUrl: './reporting-participant.page.html',
  styleUrls: ['./reporting-participant.page.scss'],
})
export class ReportingParticipantPage implements OnInit {
a:any;
utilisateur : any;
  activites : any;
  entites : any;
  nomactivite : any;
  typeactivite : any;
  entiteselect : any;
  datedebut : Date;
  datefin : Date;
  listeparticipants : any;
  listetp: any;

  constructor(private serviceactivite : ActiviteService, private serviceentite : EntiteService,private servicelp : ListeparticipantService, private modalController : ModalController, private typeact : TypeActiviteService) { }
  // accueil=[
  //   {nom:"ali"},
  //   {activite:"ndckc"},
  // ]
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

    this.servicelp.ToutLesParticipant(this.utilisateur.login, this.utilisateur.password).subscribe(
      reponse => {
        this.listeparticipants = reponse.data;
        console.log(this.listeparticipants);
      }
    )

  }
  filtrerParticipant() {
    console.log(this.typeactivite)
    console.log(this.datedebut)
    console.log(this.datefin)
    this.servicelp.filtrerParticipant(this.utilisateur.login, this.utilisateur.password, this.typeactivite, this.datedebut, this.datefin).subscribe(
      reponse => {
        this.listeparticipants = reponse.data;
        console.log(this.listeparticipants)
        this.modalController.dismiss()
      }
    )
  }
  //Methode permettant d'exporter un tableau sous format excel
  name = 'ExcelSheet.xlsx';
  exportToExcel(): void {
    let element = document.getElementById('season-tble');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  }
    
  }


