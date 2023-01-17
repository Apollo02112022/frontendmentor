import { Component } from '@angular/core';

@Component({
  selector: 'app-pick-add-ons',
  templateUrl: './pick-add-ons.component.html',
  styleUrls: ['./pick-add-ons.component.css']
})
export class PickAddOnsComponent {

  onlineMonth : number = 1
  largerMonth : number = 2;
  customizableMonth : number = 2;

  selected1 : boolean = false; 

  choice1() {
    this.selected1 = !this.selected1;
  }

  selected2 : boolean = false;

  choice2() {
    this.selected2 = !this.selected2;
  }

  selected3 : boolean = false;

  choice3() {
    this.selected3 = !this.selected3;
  }
}
