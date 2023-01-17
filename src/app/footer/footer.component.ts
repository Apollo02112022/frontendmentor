import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  
  constructor(private router: Router) {}

  onNext() {
    if(this.router.url === '/' || this.router.url ==='/step1') {
      this.router.navigate(['/step2']);
    }
    else if(this.router.url === '/step2') {
    this.router.navigate(['/step3']);
    }
    else if(this.router.url === '/step3') {
      this.router.navigate(['/step4']);
    }
  }

  onGoBack() {
    if(this.router.url === '/step4') {
      this.router.navigate(['/step3']);
    }
    else if(this.router.url === '/step3') {
    this.router.navigate(['/step2']);
    }
    else if(this.router.url === '/step2') {
      this.router.navigate(['/']) || this.router.navigate(['/step1']);
    }
  }

  here : boolean = false;

  appear() {
    if(this.router.url === '/' || this.router.url === 'step1') {
      this.here = false;
    }
    else {
      this.here = true;
    }
  }

}
