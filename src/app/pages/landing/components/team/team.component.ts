import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent {
  teamMembers = [
    {
      image: 'assets/images/team/marcus-reed.png',
      name: 'Marcus Reed',
      description: 'Master barber  /  Fades · Classic cuts',
    },
    {
      image: 'assets/images/team/sofia-chen.png',
      name: 'Sofia Chen',
      description: 'Senior stylist  /  Texture · Color · Creative cuts',
    },
    {
      image: 'assets/images/team/jordan-ellis.png',
      name: 'Jordan Ellis',
      description: 'Barber & stylist  /  Scissor cuts · Beard design',
    },
  ];
}
