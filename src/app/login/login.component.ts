import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  username: string;
  password : string;
  dataSource: Array<{username: string, password: string}> = []


  angForm: FormGroup;
   constructor(private fb: FormBuilder) {
    this.createForm();
  }

  passwordPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

   createForm() {
    this.angForm = this.fb.group({
       username: ['', Validators.required ],
       password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.angForm.valid){
      
      this.dataSource.push({username: this.angForm.value.username, password: this.angForm.value.password });
      //console.log("form submitted", this.dataSource);
    }
    
  }

}
