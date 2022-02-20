import { Component, Input, OnInit } from '@angular/core';
import { Contractor } from '../shared/models/contractor';

@Component({
  selector: 'app-contractor-card',
  templateUrl: './contractor-card.component.html',
  styleUrls: ['./contractor-card.component.scss'],
})
export class ContractorCardComponent implements OnInit {
  @Input()
  contractor!: Contractor;
  constructor() {}

  ngOnInit(): void {}
}
