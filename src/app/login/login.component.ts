import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  username: string;
  password : string;
  sessionUsername : string;
  sessionPassword : string;
  dataSource: Array<{username: string, password: string}> = []


  angForm: FormGroup;
   constructor(private fb: FormBuilder, private router: Router) {
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

      this.sessionUsername = sessionStorage.getItem("username");
      this.sessionPassword = sessionStorage.getItem("password");

      if(this.sessionUsername == this.angForm.value.username && this.sessionPassword == this.angForm.value.password){
        this.router.navigate(['/dashboard']);
      } else {
        alert("Login Failed");
      }

      //this.dataSource.push({firstname: this.regForm.value.firstname, lastname: this.regForm.value.lastname, username: this.regForm.value.username, password: this.regForm.value.password });
      //console.log("form submitted", this.dataSource);
      
      
      //this.dataSource.push({username: this.angForm.value.username, password: this.angForm.value.password });
      //console.log("form submitted", this.dataSource);
    }
    
  }

}
