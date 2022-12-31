import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AcceuilGuard } from './guard/acceuil/acceuil.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
    canActivate: [AcceuilGuard]
  },
  {
    path: 'forgotpassword/:code',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },

  {
    path: 'forgotpassword1',
    loadChildren: () => import('./forgetpassword1/forgetpassword1.module').then( m => m.Forgetpassword1PageModule)
  }
  ,
  {
    path: 'detail-taches',
    loadChildren: () => import('./detail-taches/detail-taches.module').then( m => m.DetailTachesPageModule)
  },
  {
    path: 'personnelexterne',
    loadChildren: () => import('./personnelexterne/personnelexterne.module').then( m => m.PersonnelexternePageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

