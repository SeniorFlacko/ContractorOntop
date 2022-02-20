import { Component } from '@angular/core';
import { Contractor } from './shared/models/contractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ontop';
  contractors: Contractor[] = [
    {
      name: 'Darlene Robertson',
      image: '/assets/img/profile2.png',
      type: 'Traditional',
      startDate: new Date(),
      amount: 250,
      status: 'signaturePending',
    },
    {
      name: 'Val Watson',
      image: '/assets/img/profile3.png',
      type: 'Traditional',
      startDate: new Date(),
      amount: 250,
      status: 'active',
    },
    {
      name: 'Dan Lobster',
      image: '/assets/img/profile4.png',
      type: 'Traditional',
      startDate: new Date(),
      amount: 250,
      status: 'active',
    },
  ];
}
