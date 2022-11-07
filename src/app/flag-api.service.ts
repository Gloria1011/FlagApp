import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FlagApiService {

  constructor(private http: HttpClient) { }

  getFlags(): Observable<any> {
    return this.http.get('https://restcountries.com/v2/all/');
  }

  getFlag(cname: string): Observable<any> {
    return this.http.get(`https://restcountries.com/v2/name/${cname}`)
  }

  getFlagByLang(lang: string): Observable<any> {
    return this.http.get(`https://restcountries.com/v2/lang/${lang}`)
  }

  getFlagByCurrency(mycurrency: string): Observable<any> {
    return this.http.get(`https://restcountries.com/v2/currency/${mycurrency}`)
  }

}