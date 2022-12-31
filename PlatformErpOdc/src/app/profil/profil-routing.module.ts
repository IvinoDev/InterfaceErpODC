import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// <<<<<<<< HEAD:PlatformErpOdc/src/app/profil/profil-routing.module.ts

import { ProfilPage } from './profil.page';
// ========
// import { DetailtiragePage } from './detailtirage.page';
// >>>>>>>> af5c9fafd1ba1e5f7f56129c4793584f0bfdb3e8:PlatformErpOdc/src/app/detailtirage/detailtirage-routing.module.ts

const routes: Routes = [
  {
    path: '',
// <<<<<<<< HEAD:PlatformErpOdc/src/app/profil/profil-routing.module.ts
//     component: ProfilPage
// ========
    component: ProfilPage
// >>>>>>>> af5c9fafd1ba1e5f7f56129c4793584f0bfdb3e8:PlatformErpOdc/src/app/detailtirage/detailtirage-routing.module.ts
  
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
// <<<<<<<< HEAD:PlatformErpOdc/src/app/profil/profil-routing.module.ts

export class ProfilPageRoutingModule {}
// ========
// export class DetailtiragePageRoutingModule {}
// >>>>>>>> af5c9fafd1ba1e5f7f56129c4793584f0bfdb3e8:PlatformErpOdc/src/app/detailtirage/detailtirage-routing.module.ts
