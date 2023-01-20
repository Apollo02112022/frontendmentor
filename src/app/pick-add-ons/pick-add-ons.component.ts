import { Component } from '@angular/core';

@Component({
  selector: 'app-pick-add-ons',
  templateUrl: './pick-add-ons.component.html',
  styleUrls: ['./pick-add-ons.component.css']
})
export class PickAddOnsComponent {

  onlineMonthNumber : number = 1
  largerMonthNumber : number = 2;
  customizableMonthNumber : number = 2; 

  perMonth : string = "/mo";
 

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
