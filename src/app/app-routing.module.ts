import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EquiposComponent } from './equipos/equipos.component';
import { MonitoresComponent } from './monitores/monitores.component';

const routes: Routes = [
  { path: 'equipos', component: EquiposComponent },
  { path: 'monitores', component: MonitoresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }