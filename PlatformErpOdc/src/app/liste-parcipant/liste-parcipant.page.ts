import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-parcipant',
  templateUrl: './liste-parcipant.page.html',
  styleUrls: ['./liste-parcipant.page.scss'],
})
export class ListeParcipantPage implements OnInit {
  pages : number = 1;
  
  activites = [
    {
      libelle : 'Talk 2',
      datedebut : new Date(),
      datefin : new Date(),
      nom : 'Malle',
      prenom : 'Alassane',
      email : 'malle@orangemali.com',
      datenaissance : new Date(),
    },
    {
      libelle : 'ODK 2',
      datedebut : new Date(),
      datefin : new Date(),
      nom : 'Djenika',
      prenom : 'Aboubacar',
      email : 'djenikaa@orangemali.com',
      datenaissance : new Date(),
    },
    {
      libelle : 'Formation leadership',
      datedebut : new Date(),
      datefin : new Date(),
      nom : 'Diallo',
      prenom : 'Abdoulaye',
      email : 'mdiallo@orangemali.com',
      datenaissance : new Date(),
    },
    {
      libelle : 'Talk 2',
      datedebut : new Date(),
      datefin : new Date(),
      nom : 'Malle',
      prenom : 'Alassane',
      email : 'malle@orangemali.com',
      datenaissance : new Date(),
    },
    {
      libelle : 'Talk 2',
      datedebut : new Date(),
      datefin : new Date(),
      nom : 'Malle',
      prenom : 'Alassane',
      email : 'malle@orangemali.com',
      datenaissance : new Date(),
    },
    {
      libelle : 'Talk 2',
      datedebut : new Date(),
      datefin : new Date(),
      nom : 'Malle',
      prenom : 'Alassane',
      email : 'malle@orangemali.com',
      datenaissance : new Date(),
    },
    {
      libelle : 'Talk 2',
      datedebut : new Date(),
      datefin : new Date(),
      nom : 'Malle',
      prenom : 'Alassane',
      email : 'malle@orangemali.com',
      datenaissance : new Date(),
    },
    {
      libelle : 'Talk 2',
      datedebut : new Date(),
      datefin : new Date(),
      nom : 'Malle',
      prenom : 'Alassane',
      email : 'malle@orangemali.com',
      datenaissance : new Date(),
    },
    {
      libelle : 'Talk 2',
      datedebut : new Date(),
      datefin : new Date(),
      nom : 'Malle',
      prenom : 'Alassane',
      email : 'malle@orangemali.com',
      datenaissance : new Date(),
    }
  ]

  constructor() { }

  ngOnInit() {
  }
  

}
