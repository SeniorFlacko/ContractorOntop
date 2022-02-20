import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';

const modules = [InputTextModule, ButtonModule, CalendarModule, DropdownModule];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
})
export class PrimeModule {}
