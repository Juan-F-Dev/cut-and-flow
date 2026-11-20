import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  services = [
    {
      serviceNumber: '01',
      title: 'Signature haircut',
      description: 'Your look, refined. Consultation, precision cut, wash and a finish that feels like you.',
      price: '$45',
      duration: '45 min',
    },
    {
      serviceNumber: '02',
      title: 'Beard sculpt',
      description: 'Clean lines. Natural definition. A tailored trim, hot towel and conditioning finish.',
      price: '$30',
      duration: '30 min',
    },
    {
      serviceNumber: '03',
      title: 'Cut & beard ritual',
      description: 'The complete refresh. Our signature haircut paired with a considered beard sculpt.',
      price: '$65',
      duration: '60 min',
    },
  ];
}
