import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailentiteService } from '../services/detailsentit/detailentite.service';
import { EntiteService } from '../services/entite/entite.service';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-details-entite',
  templateUrl: './details-entite.page.html',
  styleUrls: ['./details-entite.page.scss'],
})
export class DetailsEntitePage implements OnInit {
  responsive = true
  autoHide = true
  students = [
    {
      name: 'Djiguiba',
      prenom: 'Barema',
      genre: 'Masculin',
      email: 'djiguiba@orangemali.com',
      contact: '+223 8456789'
    },
    {
      name: 'Djiguiba',
      prenom: 'Barema',
      genre: 'Masculin',
      email: 'djiguiba@orangemali.com',
      contact: '+223 8456789'
    },
    {
      name: 'Djiguiba',
      prenom: 'Barema',
      genre: 'Masculin',
      email: 'djiguiba@orangemali.com',
      contact: '+223 8456789'
    },
    {
      name: 'Djiguiba',
      prenom: 'Barema',
      genre: 'Masculin',
      email: 'djiguiba@orangemali.com',
      contact: '+223 8456789'
    },
    {
      name: 'Djiguiba',
      prenom: 'Barema',
      genre: 'Masculin',
      email: 'djiguiba@orangemali.com',
      contact: '+223 8456789'
    },
    {
      name: 'Djiguiba',
      prenom: 'Barema',
      genre: 'Masculin',
      email: 'djiguiba@orangemali.com',
      contact: '+223 8456789'
    },
    {
      name: 'Djiguiba',
      prenom: 'Barema',
      genre: 'Masculin',
      email: 'djiguiba@orangemali.com',
      contact: '+223 8456789'
    },
    {
      name: 'Djiguiba',
      prenom: 'Barema',
      genre: 'Masculin',
      email: 'djiguiba@orangemali.com',
      contact: '+223 8456789'
    },
    {
      name: 'Djiguiba',
      prenom: 'Barema',
      genre: 'Masculin',
      email: 'djiguiba@orangemali.com',
      contact: '+223 8456789'
    },
    {
      name: 'Djiguiba',
      prenom: 'Barema',
      genre: 'Masculin',
      email: 'djiguiba@orangemali.com',
      contact: '+223 8456789'
    }

  ];
  nomResponsable: any;
  prenomResponsable: any;
  nombreActivite: any;
  PersonnelEntite: any;
  nombrePersonnel: any;
  ApprenantFormerParEntite: any;
  nombreApprenantFormerParEntite: any;
  toutUtilisateur: any;
  responsableEntiteMo: any;
  lead: any;
  libelleentiteMo: any;
  descriptionMo: any;
  constructor(private router: Router,private userService: UtilisateurService, private route: ActivatedRoute, private entiteService: EntiteService, private entitedetailservice: DetailentiteService) { }
  // eslint-disable-next-line @typescript-eslint/member-ordering, @typescript-eslint/type-annotation-spacing
  a!: any;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  pages!: any;
  identite: any;
  Utilisateur: any;
  entites: any;

  nomEntite:any;
  statusResponsable!:any
  descriptionEntite!:any
  imageEntite!: any
  ngOnInit() {

    this.identite = this.route.snapshot.params['id'];
    console.log(this.identite)
    //  this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur')) ;
    this.Utilisateur = JSON.parse(localStorage.getItem('utilisateur'))

    console.log(this.Utilisateur)
    this.entitedetailservice.voirdetailsEntiteid(this.Utilisateur.login, this.Utilisateur.password, this.identite).subscribe(data => {
      this.entites = data.data
      console.log(this.entites)
      this.nomEntite=this.entites.libelleentite
      this.statusResponsable = this.entites.gerant.role.libellerole
      this.descriptionEntite = this.entites.description
      this.nomResponsable = this.entites.gerant.nom
      this.prenomResponsable = this.entites.gerant.prenom
      this.imageEntite = this.entites.image
    })

    //methode permettant de retourner le nombre personne dans une entite
    this.entiteService.gettAllActiviterParEntite(this.Utilisateur.login,this.Utilisateur.password,this.identite).subscribe(data =>{
      this.nombreActivite = data.data
      console.log(data)
      if(data.data.length == undefined){
        this.nombreActivite = 0
      }else{
        this.nombreActivite = data.data.length
      }
      console.log(this.nombreActivite)
    })

    //methode permettant de recuperer les personnels d'une entite
    this.entiteService.getAllPersonnelParEntite(this.Utilisateur.login,this.Utilisateur.password,this.identite).subscribe(data =>{
      this.PersonnelEntite = data.data
      console.log("les personels d'une entite")
      console.log(data)
      if(data.data.length == undefined){
        this.nombrePersonnel = 0
      }else{
        this.nombrePersonnel = data.data.length
      }
      console.log(this.nombrePersonnel)
    })
    
//methode permettant de recuperer les apprenant d'une entite
this.entiteService.getAllAprenantParEntite(this.Utilisateur.login,this.Utilisateur.password,this.identite).subscribe(data =>{
  this.ApprenantFormerParEntite = data.data
  console.log("les apprenants d'une entite")
  console.log(data)
  if(data.data.length == undefined){
    this.nombreApprenantFormerParEntite = 0
  }else{
    this.nombreApprenantFormerParEntite = data.data.length
  }
  console.log(this.nombreApprenantFormerParEntite)
}) 

this.userService.getActivesUsers(this.Utilisateur.login, this.Utilisateur.password).subscribe(data => {
  this.toutUtilisateur = data.data;

  console.log(data.data[1].nom)

})

  }

  //METHODE PERMETTANT DE MODIFIER L'ENTITE
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
    console.log("________________________")
    console.log(this.Utilisateur.login)
    // console.log(id)
    // this.getEntiteParId(id);
    // this.idEntite = id
    // this.entitedetailservice.voirdetailsEntiteid(this.Utilisateur.login, this.Utilisateur.password, id).subscribe(data => {
    //   this.entites = data.data
    //   console.log(this.entites.libelleentite)
    //   this.libelleentiteMo = this.entites.libelleentite
    //   // this.statusResponsable = this.entites.createur.role.libellerole
    //   this.descriptionMo = this.entites.description
    //   console.log(this.descriptionEntite1)
      // this.nomResponsable = this.entites.gerant.nom
      // this.prenomResponsable = this.entites.gerant.prenom
      // this.imageEntite = this.entites.image
    //})
  }
  setClose() {

    this.isModalOpen = false;
  }
  recuperationImage(event: any) {

    this.imageEntite = event.target["files"][0];
    console.log(this.imageEntite)
  }
  modifierEntite() {
    for (let i = 0; i < this.toutUtilisateur.length; i++) {

      const array = this.responsableEntiteMo.split(' ')

      if (this.toutUtilisateur[i].prenom == array[0] && this.toutUtilisateur[i].nom == array[1]) {
        this.lead = this.toutUtilisateur[i]
      }
    }
    this.entiteService.updateEntiteById(this.Utilisateur.login, this.Utilisateur.password, this.identite, this.imageEntite, this.libelleentiteMo, this.descriptionMo, this.Utilisateur, this.lead).subscribe(data => {
      this.setClose()
      console.log(data)
    })
    //this.alet();
  }

}
