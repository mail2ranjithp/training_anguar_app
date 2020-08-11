import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableDetailComponent } from './table-detail/table-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TabsComponent } from './tabs/tabs.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikesInfoComponent } from './bikesinfo/bikesinfo.component';

import { ParentComponent } from './communication/parent/parent.component';
import { ChildComponent } from './communication/child/child.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'customers',
    //loadChildren: '/app/customer/customer.module'
    loadChildren:  () => import('./customer/customer.module').then(m => m.CustomerModule)
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'communication', component: ParentComponent },
  { path: 'information/:id', component: BikesInfoComponent },
  { path: 'bikes', component: BikesComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'tableDetail', component: TableDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
