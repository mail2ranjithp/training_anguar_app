import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatTableModule } from '@angular/material/table'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

import { TableDetailComponent } from './table-detail/table-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { SktFilterPipe } from './dashboard/skt-filter.pipe';
import { TabsComponent } from './tabs/tabs.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikesInfoComponent } from './bikesinfo/bikesinfo.component';

import { BikeService } from './bike.service';

// import { CustomerComponent } from './customer/customer.component';
// import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
// import { CustomerListComponent } from './customer/customer-list/customer-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TableDetailComponent,
    DashboardComponent,
    SktFilterPipe,
    TabsComponent,
    BikesComponent,
    BikesInfoComponent
    // CustomerComponent,
    // CustomerDetailComponent,
    // CustomerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatCardModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
