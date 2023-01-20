import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  constructor( private router: Router) {};

  turnOn1() {
    if(this.router.url === '/' || this.router.url ==='/step1') {
      return true
    }
    else {
      return false
    }
  }

  turnOn2() {
    if(this.router.url === '/step2') {
      return true
    }
    else {
      return false
    }
  }

  turnOn3() {
    if(this.router.url === '/step3') {
      return true;
    }
    else {
      return false
    }
  }

  turnOn4() {
    if(this.router.url === '/step4') {
      return true; 
    }
    else {
      return false
    }
  }

}
