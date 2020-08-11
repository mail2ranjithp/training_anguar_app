import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {
  

  firstname: string;
  lastname: string;
  username: string;
  password : string;
  dataSource: Array<{firstname: string, lastname: string, username: string, password: string}> = []


  regForm: FormGroup;
   constructor(private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  passwordPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

   createForm() {
    this.regForm = this.fb.group({
       firstname: ['', Validators.required ],
       lastname: ['', Validators.required],
       username: ['', Validators.required ],
       password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.regForm.valid){
      
      sessionStorage.setItem("username", this.regForm.value.username);
      sessionStorage.setItem("password", this.regForm.value.password);
      //sessionStorage.setItem("loggedIn", "true");
      //this.dataSource.push({firstname: this.regForm.value.firstname, lastname: this.regForm.value.lastname, username: this.regForm.value.username, password: this.regForm.value.password });
      //console.log("form submitted", this.dataSource);
      this.router.navigate(['/login']);
    }
    
  }

}
