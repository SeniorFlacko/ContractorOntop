import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-filter-section',
  templateUrl: './form-filter-section.component.html',
  styleUrls: ['./form-filter-section.component.scss'],
})
export class FormFilterSectionComponent implements OnInit {
  rangeDates!: Date[];

  contractors: any[];

  selectedContractor: any;

  status: any[];

  selectedStatus: any;

  constructor() {
    this.contractors = [{ name: 'Traditional', code: 'traditional' }];
    this.status = [
      { name: 'Active', code: 'active' },
      { name: 'Signature Pending', code: 'signaturePending' },
    ];
  }

  ngOnInit(): void {}
}
