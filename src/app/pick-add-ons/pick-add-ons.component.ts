import { Component } from '@angular/core';

@Component({
  selector: 'app-pick-add-ons',
  templateUrl: './pick-add-ons.component.html',
  styleUrls: ['./pick-add-ons.component.css']
})
export class PickAddOnsComponent {
  selected1 : boolean = false; 
  selected2 : boolean = false;
  selected3 : boolean = false;

  choice1() {
    this.selected1 = !this.selected1;
  }

  choice2() {
    this.selected2 = !this.selected2;
  }

  choice3() {
    this.selected3 = !this.selected3;
  }
}
