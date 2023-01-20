import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SelectYourPlanComponent } from './select-your-plan/select-your-plan.component';
import { PickAddOnsComponent } from './pick-add-ons/pick-add-ons.component';
import { FinishingUpComponent } from './finishing-up/finishing-up.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { NavigationService } from './navigation.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PersonalInfoComponent,
    SelectYourPlanComponent,
    PickAddOnsComponent,
    FinishingUpComponent,
    ThankYouComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
