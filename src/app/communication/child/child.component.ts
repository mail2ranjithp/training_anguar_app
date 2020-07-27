import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent implements OnInit {

  private _loggedIn : boolean;
  message : string;
  get loggedIn(): boolean{
    return this._loggedIn;
  }
  @Input()
  set loggedIn(value : boolean){
    this._loggedIn = value;
    if( value == true){
      this.message = "Welcome Back!";
    } else {
      this.message = "Please Login!";
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
