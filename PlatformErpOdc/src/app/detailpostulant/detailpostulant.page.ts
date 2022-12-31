import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonModal, ModalController } from '@ionic/angular';
import { DesactiverpersonnelPage } from '../desactiverpersonnel/desactiverpersonnel.page';
import { SupprimerpersonnelPage } from '../supprimerpersonnel/supprimerpersonnel.page';
import Swal from 'sweetalert2';
import { OverlayEventDetail } from '@ionic/core/components';
import { RoleService } from '../services/role/role.service';
import { UtilisateurService } from '../services/utilisateur/utilisateur.service';
import { EntiteService } from '../services/entite/entite.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-detailpostulant',
  templateUrl: './detailpostulant.page.html',
  styleUrls: ['./detailpostulant.page.scss'],
})
export class DetailpostulantPage implements OnInit {

  formatMailperonnel:any;
  modelData:any;
  Utilisateur:any;
  Roles:any;
  Entites:any;
  AllUser:any;
  message:string;
  name:any;
  idUser: any;
  nom: any;
  prenom: any;
  users: any;
  genre: any;
  email: any;
  image: File;
  statusUser: any;
  nomEntite: any;
  role: any;
  RoleSelectionner: any;
  Genre: any;entite: any;
  idAdmin:any;
  monEntite: any;
  EntiteSelectionner: any;
  domaine: any;
  image1: any;
  idEntite: any;
  idRole: any;
  shouldHide: boolean;
  dividerHide: boolean;
  network: any;
  platform: any;
  numero: any;
  RoleSelectionner2: any;
  EmailSelectionner: any;
  contact: any;
  lieunaissance: String;

  constructor(private alertController : AlertController,private modalController:ModalController,private entiteService:EntiteService,private roleservice:RoleService,private userService:UtilisateurService,
    private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
//L'id recupérer depuis de navigateur
    this.idUser = this.route.snapshot.params['id'];
    console.log(this.idUser)

    //Fonction pour recupérer le user connecter
    this.Utilisateur=JSON.parse(localStorage.getItem('utilisateur')) 
    console.log(this.Utilisateur)


    //Fonction pour actualisation
    this.getPersonneParId(this.idUser, this.Utilisateur)

//Recuperation des entités
    this.entiteService.getAllEntites(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      if(data.message=='ok'){
        this.Entites=data.data
        console.log(this.Entites)

      }
    })


    //Recupération des rôles
    this.roleservice.getAllRole(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      if(data.message=="ok"){
        this.Roles=data.data
        console.log(this.Roles)
      }
    })

//Recupération des formats email
    this.roleservice.getListeFormatMail(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
      if(data.message=="ok"){
        this.formatMailperonnel=data.data
        console.log(this.formatMailperonnel)
      }
    })


  


    }
  

  
    back(): void {
      window.history.back()
    }
  




    //Pour récupérer le personnel par id
    getPersonneParId(id: any, utilisateur: any){
      this.userService.DetailsUserById(utilisateur.login, utilisateur.password, id).subscribe(data => {
        this.users = data.data
        console.log(this.users)
        this.nom = this.users.nom
        this.prenom = this.users.prenom
        this.genre = this.users.genre
        this.email = this.users.email
        this.image = this.users.image
        this.nomEntite = this.users.monEntite.libelleentite
        this.statusUser = this.users.role.libellerole
      })
    }
    


     //Pour récupérer le personnel par id
    //  getIntervenantParId(id: any, utilisateur: any){
    //   this.userService.DetailsUserById(utilisateur.login, utilisateur.password, id).subscribe(data => {
    //     this.users = data.data
    //     console.log(this.users)
    //     this.nom = this.users.nom
    //     this.prenom = this.users.prenom
    //     this.genre = this.users.genre
    //     this.email = this.users.email
    //     this.numero = this.users.numero
    //   })
    // }



    //Methode de update du personnel
    UpdateUser(){
      for(let i=0; i<this.Roles.length;i++){
        if(this.Roles[i].libellerole==this.role){
          this.RoleSelectionner=this.Roles[i]
        }
      }
      for(let i=0; i<this.Entites.length;i++){
        if(this.Entites[i].libelleentite==this.entite){
          this.EntiteSelectionner=this.Entites[i]
        }
      }

      // for(let i=0; i<this.formatMailperonnel.length;i++){
      //   if(this.formatMailperonnel[i].libelle==this.email){
      //     this.EmailSelectionner=this.formatMailperonnel[i]
      //   }
      // }

      // for(let i=0; i<this.Roles.length;i++){
      //   if(this.Roles[i].libellerole==this.statusUser){
      //     this.RoleSelectionner2=this.statusUser
      //   }
      // }
      // console.log(this.RoleSelectionner2)
      console.log(this.RoleSelectionner)
      console.log(this.EntiteSelectionner)
     
      if(this.genre == 'Masculin')
      {
        this.Genre = 0
      }else{
        this.Genre = 1
      }
      console.log("immmmmmmmmmmmmmm")
      console.log(this.image1)
      this.userService.UpdateUser(this.Utilisateur.login,this.Utilisateur.password,this.nom,this.prenom,this.email+this.domaine,this.Genre,this.image1,this.EntiteSelectionner,this.RoleSelectionner,this.idUser).subscribe(retour=>{
        console.log(retour)
        // this.presentAlert()
      })
      this.cancel()
      this.MessageSuccesUpdate()
      this.actualisePage(this.idUser,this.Utilisateur)
     
    }



    
  //Pop up apres suppression
  MessageDeleteUserEffectuer(){
    Swal.fire({
      title: "Attention vous etes sûr de vouloir SUPPRIMER le personnel",
      showConfirmButton: true,
      confirmButtonText: "Oui",
      confirmButtonColor: 'green',
      showCancelButton: true,
      cancelButtonText: "Non",
      cancelButtonColor: 'red',
      heightAuto: false
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire({
          title: "Etes-vous vraiment sûr de vouloir supprimer le personnel ?",
          showConfirmButton: true,
          confirmButtonText: "Confirmer",
          confirmButtonColor: 'green',
          showCancelButton: true,
          cancelButtonText: "Annuler",
          cancelButtonColor: 'red',
          heightAuto: false
        }).then((result) => {
          if (result.isConfirmed) {
            this.userService.DeleteUser(this.Utilisateur.login,this.Utilisateur.password,this.RoleSelectionner,this.idUser).subscribe(retour=>{
              console.log(retour)
            });
            this.router.navigateByUrl('/dashboard/personnels', {skipLocationChange: true}).then(() => {
              this.router.navigate(["/personnels"])
            })
        }else if (result.isDenied) {
          Swal.fire('Suppression annuler !');
        }
    
      });
    }else if (result.isDenied) {
    // Swal.fire('Annuler', '', 'info');
    }
  });
  
  }
     


    //Delete methode personnel
  // DeleteUser(){
  //   this.MessageDeleteUserEffectuer();
  //   this.userService.DeleteUser(this.Utilisateur.login,this.Utilisateur.password,this.RoleSelectionner,this.idUser).subscribe(retour=>{
  //     console.log(retour)
  //     // this.actualisePagApresSuppresion()
  //     // this.router.navigateByUrl('/dashboard/personnels')
  //   });
  //     // this.presentAlert()
  //   }


     //Desactiver methode
     DesactiverUser(){
      for(let i=0; i<this.Roles.length;i++){
        if(this.Roles[i].libellerole==this.role){
          this.RoleSelectionner=this.Roles[i]
        }
      }
      console.log(this.RoleSelectionner)
  
      Swal.fire({
        title: "Attention vous etes sûr de vouloir DESACTIVER le personnel",
        showConfirmButton: true,
        confirmButtonText: "Oui",
        confirmButtonColor: 'green',
        showCancelButton: true,
        cancelButtonText: "Non",
        cancelButtonColor: 'red',
        heightAuto: false
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire({
            title: "Etes-vous vraiment sûr de vouloir desactiver le personnel ?",
            showConfirmButton: true,
            confirmButtonText: "Oui",
            confirmButtonColor: 'green',
            showCancelButton: true,
            cancelButtonText: "Non",
            cancelButtonColor: 'red',
            heightAuto: false
          }).then((result) => {
            if (result.isConfirmed) {
              this.userService.DesactiverUser(this.Utilisateur.login,this.Utilisateur.password,this.RoleSelectionner,this.idUser).subscribe(retour=>{
                console.log(retour)
            });
            this.router.navigateByUrl('/dashboard/personnels', {skipLocationChange: true}).then(() => {
              this.router.navigate(["/personnels"])
            })
          }else if (result.isDenied) {
            Swal.fire('Desacivation annuler !');
          }
        
        });
      }else if (result.isDenied) {
        // Swal.fire('Changes are not saved', '', 'info');
      }
      
    });
  }
    


    //Envoi de photo
    envoyerImage(event: any){
      this.image = event.target["files"][0];
      console.log(this.image)
    }
    envoyerImage1(event: any){
      this.image1 = event.target["files"][0];
      console.log(this.image)
    }





    //Pop up de update reçu
    MessageSuccesUpdate(){
      Swal.fire({
        title: "Personnel modifier avec succes",
        showConfirmButton: true,
        confirmButtonText: "Daccord",
        confirmButtonColor: 'green',
        heightAuto: false
      })
    }


    //Methode pour actualiser la page
    actualisePage(id:any, user:any){
      setTimeout(() => {
        this.getPersonneParId(id,user)
      }, 1000);
    }


///Methode permettant de rediriger apres la suppression d'une personne
// ActualisePage Apres suppression
// actualisePagApresSuppresion(){
//   setTimeout(() => {
//     this.getAllUser()
//   }, 1000);
// }

getAllUser(){

  this.userService.getAllUsers(this.Utilisateur.login,this.Utilisateur.password).subscribe(data=>{
    this.users=data.data;
    
    console.log(data.data)
  });
}

 


  @ViewChild(IonModal) modal: IonModal;

  // message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  // name: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
  }
  confirmP() {
    this.modal.dismiss(null, 'confirm');
  }

  onWillDismiss(event: Event) {
    // const ev = event as CustomEvent<OverlayEventDetail<string>>;
    // if (ev.detail.role === 'ConfirmVariale') {
    //   this.name = `${ev.detail.data}!`;
    //   console.log(this.name);
    // }
  }

  // onWillDismiss(event: Event) {
  //   const ev = event as CustomEvent<OverlayEventDetail<string>>;
  //   if (ev.detail.role === 'confirm') {
  //     this.message = `Modication effectué avec, ${ev.detail.data}!`;
  //   }
  // }



  // @ViewChild(IonModal) modal: IonModal;

  // message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  // name: string;

  // cancel() {
  //   this.modal.dismiss(null, 'cancel');
  // }

  // confirm() {
  //   this.modal.dismiss(this.name, 'confirm');
  // }

  // onWillDismiss(event: Event) {
  //   const ev = event as CustomEvent<OverlayEventDetail<string>>;
  //   if (ev.detail.role === 'confirm') {
  //     this.message = `Hello, ${ev.detail.data}!`;
  //   }
  // }

}
