import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit {

  countries: Country[] = [];
  isLoading: boolean = false;
  initialValue: string = '';

  constructor(
    private countriesService: CountriesService
  ){}

  ngOnInit(): void {
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
    this.countries = this.countriesService.cacheStore.byCountries.countries;
  }

  searchByCountry( term: string ) {

    this.isLoading = true;

    this.countriesService.searchCountry( term )
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      });
  }
}
