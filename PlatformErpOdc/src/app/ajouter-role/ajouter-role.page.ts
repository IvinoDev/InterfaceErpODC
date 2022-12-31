import { Component, OnInit } from '@angular/core';
import { RoleService } from '../services/role/role.service';

@Component({
  selector: 'app-ajouter-role',
  templateUrl: './ajouter-role.page.html',
  styleUrls: ['./ajouter-role.page.scss'],
})
export class AjouterRolePage implements OnInit {
  TousLesDroits: any;
  Utilisateur: any;
  creation = 'Create'
  read = 'Read'
  update = 'Update'
  supprimer = 'Delete'
  libelleRole!: any

  // createEntite: any;
  // updateEntite: any;
  // readEntite: any;
  // deleteEntite: any;

  // createActivite: any;
  // updateActivite: any;
  // readActivite: any;
  // deleteActivite: any;

  // createSalle: any;
  // updateSalle: any;
  // readSalle: any;
  // deleteSalle: any;

  // createAouP: any;
  // updateAouP: any;
  // readAouP: any;
  // deleteAouP: any;

  // createDesignation: any;
  // updateDesignation: any;
  // readDesignation: any;
  // deleteDesignation: any;

  // createEtat: any;
  // updateEtat: any;
  // readEtat: any;
  // deleteEtat: any;

  // createFormatEmail: any;
  // updateFormatEmail: any;
  // readFormatEmail: any;
  // deleteFormatEmail: any;

  // createIntervenant: any;
  // updateIntervenant: any;
  // readIntervenant: any;
  // deleteIntervenant: any;

  // createListPostulant: any;
  // updateListPostulant: any;
  // readListPostulant: any;
  // deleteListPostulant: any;

  // createPostulant: any;
  // updatePostulant: any;
  // readPostulant: any;
  // deletePostulant: any;

  // createPresence: any;
  // updatePresence: any;
  // readPresence: any;
  // deletePresence: any;

  // createRole: any;
  // updateRole: any;
  // readRole: any;
  // deleteRole: any;

  // createTache: any;
  // updateTache: any;
  // readTache: any;
  // deleteTache: any;

  // createTirage: any;
  // updateTirage: any;
  // readTirage: any;
  // deleteTirage: any;

  // createUtilisateur: any;
  // updateUtilisateur: any;
  // readUtilisateur: any;
  // deleteUtilisateur: any;

  // createTypeActivite: any;
  // updateTypeActivite: any;
  // readTypeActivite: any;
  // deleteTypeActivite: any;
  // LibelleEntite: any;
  // LibelleEntiteLecture: any;
  LibelleRoleLecture = new Array();
  LibelleRoleCreation = new Array();
  LibelleRoleUpdate = new Array();
  LibelleRoleSuppression = new Array();
  currentRoleCreate: any;

  constructor(private serviceRole: RoleService) { }

  ngOnInit() {
    this.Utilisateur = JSON.parse(localStorage.getItem('utilisateur'));
    console.log(this.Utilisateur)
    this.serviceRole.getAllDroit(this.Utilisateur.login, this.Utilisateur.password).subscribe(donne => {
      this.TousLesDroits = donne.data
      console.log(this.TousLesDroits)
      
      for (let i = 0; i < this.TousLesDroits.length; i++) {
        console.log(this.TousLesDroits[0])
        if (this.TousLesDroits[i].libelle.split(' ')[0] == this.read) {

          this.LibelleRoleLecture.push(this.TousLesDroits[i]) 
          console.log(this.LibelleRoleLecture)
        } else if (this.TousLesDroits[i].libelle.split(' ')[0] == this.creation) {
          this.LibelleRoleCreation.push(this.TousLesDroits[i])
        } else if (this.TousLesDroits[i].libelle.split(' ')[0] == this.update) {
          this.LibelleRoleUpdate.push(this.TousLesDroits[i])
        } else {
          this.LibelleRoleSuppression.push(this.TousLesDroits[i])
          // console.log(this.LibelleRoleSuppression)
        }
      }
    })
    // console.log(this.TousLesDroits)
    // console.log(this.TousLesDroits)
    //     

    //     }

    // for(let i = 0; i< this.TousLesDroits.length; i++){
    //   const create = 'Create'
    //   const read = 'Read'
    //   const update = 'Update'
    //   const delete1 = 'Delete'
    //   if(this.TousLesDroits[i].libelle.split(' ')[0] == create){
    //     this.DroitCommencantParCreer = this.TousLesDroits[i]
    //   }else if(this.TousLesDroits[i].libelle.split(' ')[0] == update){
    //     this.DroitCommencantParUpdate =  this.TousLesDroits[i]
    //   }else if(this.TousLesDroits[i].libelle.split(' ')[0] == read){
    //     this.DroitCommencantParRead = this.TousLesDroits[i]
    //   }else if(this.TousLesDroits[i].libelle.split(' ')[0] == delete1){
    //     this.DroitCommencantParDelete = this.TousLesDroits[i]
    //   }
    // }

  }
  compareWith(o1, o2) {
    if (!o1 || !o2) {
      return o1 === o2;
    }

    if (Array.isArray(o2)) {
      return o2.some((o) => o.id === o1.id);
    }

    return o1.id === o2.id;
  }

  handleChange(ev) {
    this.currentRoleCreate = ev.target.value;
  }
  postRole() {
    this.serviceRole.postRole(this.Utilisateur.login, this.Utilisateur.password, this.libelleRole, this.currentRoleCreate).subscribe(data => {
      console.log(data)
    })
  }




}
