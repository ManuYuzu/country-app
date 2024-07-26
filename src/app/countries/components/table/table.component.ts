import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  templateUrl: './table.component.html',
  styles: ``
})
export class CountryTableComponent {

  @Input()
  countries: Country[] = [];

  constructor() {}
}
