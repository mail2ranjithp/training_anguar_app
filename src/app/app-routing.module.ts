import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableDetailComponent } from './table-detail/table-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TabsComponent } from './tabs/tabs.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikesInfoComponent } from './bikesinfo/bikesinfo.component';

const routes: Routes = [
  { path: 'information/:id', component: BikesInfoComponent },
  { path: 'bikes', component: BikesComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'tableDetail', component: TableDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
