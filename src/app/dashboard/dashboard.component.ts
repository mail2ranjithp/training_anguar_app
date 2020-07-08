import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

import { Products } from '../products';

const productList = new Products();

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  public filter:string = '';
  name: string;
  address : string;
  dataSource: Array<{name: string, address: string}> = []
  public list:any[] = productList.products;

  angForm: FormGroup;
   constructor(private fb: FormBuilder) {
    this.createForm();
  }
   createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       address: ['', Validators.required ]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.angForm.valid){
      
      this.dataSource.push({name: this.angForm.value.name, address: this.angForm.value.address });
      //console.log("form submitted", this.dataSource);
    }
    
  }

}
