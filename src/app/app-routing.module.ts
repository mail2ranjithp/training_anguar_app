import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableDetailComponent } from './table-detail/table-detail.component';

const routes: Routes = [
  { path: 'tableDetail', component: TableDetailComponent },
  { path: '', redirectTo: '/tableDetail', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
