import { Component, Input, OnInit } from '@angular/core';
import { Contractor } from '../shared/models/contractor';
import { statusType } from '../shared/models/status-tag.model';

@Component({
  selector: 'app-contractors-table',
  templateUrl: './contractors-table.component.html',
  styleUrls: ['./contractors-table.component.scss'],
})
export class ContractorsTableComponent implements OnInit {
  @Input()
  contractors!: Contractor[];
  constructor() {}

  ngOnInit(): void {}
}
