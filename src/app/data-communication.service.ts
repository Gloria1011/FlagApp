import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataCommunicationService {
  sendToFavoriteCountries:Array<any> = [];
  constructor() { }

  passedFlag(countrythreee:any){
    this.sendToFavoriteCountries.push(countrythreee)
  }
}
