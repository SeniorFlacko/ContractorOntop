import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContractorLabelComponent } from './contractor-label/contractor-label.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SharedModule } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterButtonComponent } from './filter-button/filter-button.component';
import { NewHireButtonComponent } from './new-hire-button/new-hire-button.component';
import { SearchBarSectionComponent } from './search-bar-section/search-bar-section.component';
import { FormFilterSectionComponent } from './form-filter-section/form-filter-section.component';
import { PrimeModule } from './shared/prime/prime.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClearFiltersButtonComponent } from './clear-filters-button/clear-filters-button.component';
import { ContractorsTableComponent } from './contractors-table/contractors-table.component';
import { StatusTagComponent } from './status-tag/status-tag.component';
import { MaterialModule } from './shared/material/material/material.module';
import { ContextmenuComponent } from './contextmenu/contextmenu.component';
import { ContractorCardComponent } from './contractor-card/contractor-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContractorLabelComponent,
    SearchBoxComponent,
    FilterButtonComponent,
    NewHireButtonComponent,
    SearchBarSectionComponent,
    FormFilterSectionComponent,
    ClearFiltersButtonComponent,
    ContractorsTableComponent,
    StatusTagComponent,
    ContextmenuComponent,
    ContractorCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    PrimeModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
