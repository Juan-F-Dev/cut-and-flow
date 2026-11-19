import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [
    LogoComponent,
    ButtonComponent,
    InputComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent,
    ButtonComponent,
    InputComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
