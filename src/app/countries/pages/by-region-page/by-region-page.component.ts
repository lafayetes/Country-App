import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {
  constructor(private countriesService: CountriesService) { }
  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  public selectedRegion?: Region;
  public initialValue:Region ='';

  ngOnInit(): void {

    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.initialValue = this.countriesService.cacheStore.byRegion.region;
    this.selectedRegion = this.initialValue;
  }

  searchByRegion(region: Region) {
    this.selectedRegion = region;
    this.countriesService.searchByRegion(region)
      .subscribe(countries => {
        this.countries = countries;
      });

  }

}
