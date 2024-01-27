import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl:string = 'https://restcountries.com/v3.1';
  constructor(private http:HttpClient) { }


  searchByCapital(term:string):Observable<Country[]>{
    const url:string = `${this.apiUrl}/capital/${term}`;
   return this.http.get<Country[]>( url )
   .pipe(
    catchError(error=> of([]) )


    // tap( countries => console.log('Tap 1',countries) ),
    // map( countries => []),
    // tap( countries => console.log('Tap 2',countries) ),
   );
  }

  searchByCountry(term:string):Observable<Country[]>{
    const url:string = `${this.apiUrl}/name/${term}`;
   return this.http.get<Country[]>( url )
   .pipe(
    catchError(error=> of([]) )
 );
  }

  searchByRegion(term:string):Observable<Country[]>{
    const url:string = `${this.apiUrl}/region/${term}`;
   return this.http.get<Country[]>( url )
   .pipe(
    catchError(error=> of([]) )
 );
  }
}
