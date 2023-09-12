import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

import { LogiComponent } from './logi/logi.component';
import { CerrarComponent } from './cerrar/cerrar.component';

const routes: Routes = [

  { path: '', redirectTo: 'logi', pathMatch: "full" },
  {
    path: 'Cerrar',
    component: CerrarComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/logi']))
  },
  {path: 'logi', component: LogiComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
