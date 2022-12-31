import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportingParticipantPageModule } from '../reporting-participant/reporting-participant.module';
import { DashboardPage } from './dashboard.page';


const routes: Routes = [
  {
    path:"",
    component:DashboardPage,
    children:[
      {
        path: '',
        redirectTo: 'acceuil',
        pathMatch: 'full'
      },


      {
        path: 'reporting-participant',
        loadChildren: () => import('../reporting-participant/reporting-participant.module').then( m => m.ReportingParticipantPageModule)
      },
      {
        path: 'profil',
        loadChildren: () => import('../profil/profil.module').then( m => m.ProfilPageModule)
      },
      {
        path: 'salle',
        loadChildren: () => import('../salle/salle.module').then( m => m.SallePageModule)
      },
      {
        path: 'reportingfiltreact',
        loadChildren: () => import('../reportingfiltreact/reportingfiltreact.module').then( m => m.ReportingfiltreactPageModule)
      }, {
        path: 'reportingfiltrepart',
        loadChildren: () => import('../reportingfiltrepart/reportingfiltrepart.module').then( m => m.ReportingfiltrepartPageModule)
      },

      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'accueil',
        loadChildren: () => import('../accueil/accueil.module').then( m => m.AccueilPageModule)
      },
      {
        path: 'ajout-entite',
        loadChildren: () => import('../ajout-entite/ajout-entite.module').then( m => m.AjoutEntitePageModule)
      },


      {
        path: 'allactivity',
        loadChildren: () => import('../allactivity/allactivity.module').then( m => m.AllactivityPageModule)
      },

      {
        path: 'activites',
        loadChildren: () => import('../activites/activites.module').then( m => m.ActivitesPageModule)
      },
      {
        path: 'ajoutparticipant/:id',
        loadChildren: () => import('../ajoutparticipant/ajoutparticipant.module').then( m => m.AjoutparticipantPageModule)
      },
      {
        path: 'ajoutparticipant',
        loadChildren: () => import('../ajoutparticipant/ajoutparticipant.module').then( m => m.AjoutparticipantPageModule)
      },


      {
        path: 'detailactivite/:id',
        loadChildren: () => import('../detailactivity/detailactivity.module').then( m => m.DetailactivityPageModule)
      },
      {
        path: 'liaisonsalle/:id',
        loadChildren: () => import('../liaisonsalle/liaisonsalle.module').then( m => m.LiaisonsallePageModule)
      },
      {
        path: 'lier-salle-activity',
        loadChildren: () => import('../lier-salle-activity/lier-salle-activity.module').then( m => m.LierSalleActivityPageModule)
      },
      {
        path: 'creer-salle',
        loadChildren: () => import('../creer-salle/creer-salle.module').then( m => m.CreerSallePageModule)
      },
      {
        path: 'modifiersalle/:id',
        loadChildren: () => import('../modifier-salle/modifier-salle.module').then( m => m.ModifierSallePageModule)
      },
      {
        path: 'tachedesignation/:id',
        loadChildren: () => import('../tachedesignation/tachedesignation.module').then( m => m.TachedesignationPageModule)
      },

      {
        path: 'tachedesignation',
        loadChildren: () => import('../tachedesignation/tachedesignation.module').then( m => m.TachedesignationPageModule)
      },
 
      {
        path: 'creertachesdesignation/:id',
        loadChildren: () => import('../creertachesdesignation/creertachesdesignation.module').then( m => m.CreertachesdesignationPageModule)
      },
      {
        path: 'reporting',
        loadChildren: () => import('../reporting/reporting.module').then( m => m.ReportingPageModule)
      },

    {
      path: 'personnel-externe',
      loadChildren: () => import('../personnelexterne/personnelexterne.module').then( m => m.PersonnelexternePageModule)
    },
    {
      path: 'personnels',
      loadChildren: () => import('../personnel/personnel.module').then( m => m.PersonnelPageModule)
    },
    {
      path: 'nouveau-personnel',
      loadChildren: () => import('../nouveaupersonnel/nouveaupersonnel.module').then( m => m.NouveaupersonnelPageModule)
    },
    {
      path: 'ajouter-personnel-externe',
      loadChildren: () => import('../ajouterpersonnel/ajouterpersonnel.module').then( m => m.AjouterpersonnelPageModule)
    },
    {
      path: 'detail-personnel/:id',
      loadChildren: () => import('../detailpostulant/detailpostulant.module').then( m => m.DetailpostulantPageModule)
    },
    {
      path: 'entite',
      loadChildren: () => import('../entite/entite.module').then( m => m.EntitePageModule)
    },
    // {
    //   path: 'details-entite/:id',
    //   loadChildren: () => import('../details-entite/details-entite.module').then( m => m.DetailsEntitePageModule)
    // },
    {
      path: 'role',
      loadChildren: () => import('../role/role.module').then( m => m.RolePageModule)
    },
    {
      path: 'salle',
      loadChildren: () => import('../salle/salle.module').then( m => m.SallePageModule)
    },

    {
      path: 'tirage',
      loadChildren: () => import('../tirage/tirage.module').then( m => m.TiragePageModule)
    },
    {
      path: 'detail-tirage/:idT',
      loadChildren: () => import('../detailtirage/detailtirage.module').then( m => m.DetailtiragePageModule)
    },
    {
      path: 'detail-tirage-dune-liste/:id',
      loadChildren: () => import('../detail-tirage-dune-liste/detail-tirage-dune-liste.module').then( m => m.DetailTirageDuneListePageModule)
    },
    {
      path: 'detail-des-listes', 
      loadChildren: () => import('../detail-des-listes/detail-des-listes.module').then( m => m.DetailDesListesPageModule)
    },
    {
      path: 'importeliste',
      loadChildren: () => import('../importliste/importliste.module').then( m => m.ImportlistePageModule)
    },

    {
      path: 'importer-participant/:id',
      loadChildren: () => import('../importer-listeparticipant/importer-listeparticipant.module').then( m => m.ImporterListeparticipantPageModule)
    },
    {
      path: 'editactivity/:id',
      loadChildren: () => import('../editactivity/editactivity.module').then( m => m.EditactivityPageModule)
    },
    {
      path: 'editactivity',
      loadChildren: () => import('../editactivity/editactivity.module').then( m => m.EditactivityPageModule)
    },
    {
      path: 'ajouter-role',
      loadChildren: () => import('../ajouter-role/ajouter-role.module').then( m => m.AjouterRolePageModule)
    },
    {
      path: 'taches-activite',
      loadChildren: () => import('../taches-activite/taches-activite.module').then( m => m.TachesActivitePageModule)
    },
    {
      path: 'activite',
      loadChildren: () => import('../allactivity/allactivity.module').then( m => m.AllactivityPageModule)
    },
    {
      path: 'modifier-salle',
      loadChildren: () => import('../modifier-salle/modifier-salle.module').then( m => m.ModifierSallePageModule)
    },
  {
        path: 'profil',
      loadChildren: () => import('../profil/profil.module').then( m => m.ProfilPageModule)
    },

    {
      path: 'modifiertache/:id',
      loadChildren: () => import('../modifiertache/modifiertache.module').then( m => m.ModifiertachePageModule)
  },



      { path: '**', redirectTo:'accueil',pathMatch:'full'}


    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPageRoutingModule {}
