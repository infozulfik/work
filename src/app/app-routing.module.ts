import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrxComponent } from './trx/trx.component';
import { DmtComponent } from './dmt/dmt.component';
import { ProjectOneUsComponent } from './project-one-us/project-one-us.component';


const routes: Routes = [
  { path: 'trx', component: TrxComponent },
  { path: 'dmt', component: DmtComponent },
  { path: 'projectOneUs', component: ProjectOneUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
