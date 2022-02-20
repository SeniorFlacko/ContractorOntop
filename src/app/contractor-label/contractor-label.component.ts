import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contractor-label',
  templateUrl: './contractor-label.component.html',
  styleUrls: ['./contractor-label.component.scss'],
})
export class ContractorLabelComponent implements OnInit {
  @Input() contractorName = '';

  constructor() {}

  ngOnInit(): void {}
}
