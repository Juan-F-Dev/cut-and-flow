import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { StudioStoryComponent } from './components/studio-story/studio-story.component';
import { TeamComponent } from './components/team/team.component';
import { BookingCtaComponent } from './components/booking-cta/booking-cta.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../../shared/shared.module';
import { ValuePropsComponent } from './components/value-props/value-props.component';

@NgModule({
  declarations: [
    LandingComponent,
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    StudioStoryComponent,
    TeamComponent,
    BookingCtaComponent,
    FooterComponent,
    ValuePropsComponent,
  ],
  imports: [CommonModule, LandingRoutingModule, SharedModule],
})
export class LandingModule {}
