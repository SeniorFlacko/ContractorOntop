import { Component, Input, OnInit } from '@angular/core';
import { statusType } from '../shared/models/status-tag.model';

@Component({
  selector: 'app-status-tag',
  templateUrl: './status-tag.component.html',
  styleUrls: ['./status-tag.component.scss'],
})
export class StatusTagComponent implements OnInit {
  @Input() status: statusType = '-';

  constructor() {}

  ngOnInit(): void {}

  get tagType() {
    switch (this.status) {
      case 'active':
        return 'active';
      case 'signaturePending':
        return 'signature-pending';

      default:
        return 'no-status';
    }
  }
}
