import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule 
  ],
  declarations: [
    CustomerComponent, 
    CustomerListComponent, 
    CustomerDetailComponent,
    FilterPipe
  ],
  exports: [
    // ...
    FilterPipe
]
})
export class CustomerModule { }
