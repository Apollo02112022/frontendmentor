import { Component } from '@angular/core';

@Component({
  selector: 'app-select-your-plan',
  templateUrl: './select-your-plan.component.html',
  styleUrls: ['./select-your-plan.component.css']
})
export class SelectYourPlanComponent {

  arcadeMonth : number = 9;
  advancedMonth : number = 12;
  proMonth : number = 15;
  arcadeYear : number = 90;
  advancedYear : number = 120;
  proYear : number = 150;

  selected : boolean = false;

  oppose(){
    this.selected = !this.selected;
  }

  write : boolean = false;

  contents() {
    this.write =!this.write;
  }

}

