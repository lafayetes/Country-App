import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  constructor(private countriesService:CountriesService){}
  public countries: Country[] = [];
  searchByRegion(term:string){
    this.countriesService.searchByRegion(term)
    .subscribe(countries =>{
      this.countries = countries;
    });

  }
}
