import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contextmenu',
  templateUrl: './contextmenu.component.html',
  styleUrls: ['./contextmenu.component.scss'],
})
export class ContextmenuComponent implements OnInit {
  @Input() icon: string = 'more_vert';

  constructor() {}

  ngOnInit(): void {}
}
