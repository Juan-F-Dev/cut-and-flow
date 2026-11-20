import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss'],
})
export class ServiceCardComponent {
  @Input() serviceNumber: string = '01';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() price: string = '';
  @Input() duration: string = '';
}
