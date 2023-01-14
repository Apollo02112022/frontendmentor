import { Component} from '@angular/core';

@Component({
  selector: 'app-select-your-plan',
  templateUrl: './select-your-plan.component.html',
  styleUrls: ['./select-your-plan.component.css']
})
export class SelectYourPlanComponent {
  selected : boolean = false;
  write : boolean = false;

  oppose(){
    this.selected = !this.selected;
  }

  contents() {
    this.write =!this.write;
  }

}

