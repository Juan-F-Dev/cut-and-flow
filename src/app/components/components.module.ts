import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentLibraryComponent } from './pages/component-library/component-library.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ComponentLibraryComponent],
  imports: [CommonModule, ComponentsRoutingModule, SharedModule],
})
export class ComponentsModule {}
