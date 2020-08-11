import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'hero';

  constructor( private router: Router) {
  }

  onLoginCheck($event) {
    this.loggedIn = sessionStorage.getItem("loggedIn");
  }
    
  loggedIn = sessionStorage.getItem("loggedIn");
  

  logout(){ 
    sessionStorage.clear();
    this.router.navigate(['/login']);    
  }
}
