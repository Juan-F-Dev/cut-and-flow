import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { TeamCardComponent } from './components/team-card/team-card.component';



@NgModule({
  declarations: [
    LogoComponent,
    ButtonComponent,
    InputComponent,
    LoadingComponent,
    ServiceCardComponent,
    TeamCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent,
    ButtonComponent,
    InputComponent,
    LoadingComponent,
    ServiceCardComponent,
    TeamCardComponent
  ]
})
export class SharedModule { }
