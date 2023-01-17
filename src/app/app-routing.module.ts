import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SelectYourPlanComponent } from './select-your-plan/select-your-plan.component';
import { PickAddOnsComponent } from './pick-add-ons/pick-add-ons.component';
import { FinishingUpComponent } from './finishing-up/finishing-up.component';


const routes: Routes = [
  {path: '', component: PersonalInfoComponent},
  {path: 'step1', component: PersonalInfoComponent},
  {path: 'step2', component: SelectYourPlanComponent},
  {path: 'step3', component: PickAddOnsComponent},
  {path: 'step4', component: FinishingUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
