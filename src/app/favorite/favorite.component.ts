import { Component, OnInit } from '@angular/core';
import { DataCommunicationService } from '../data-communication.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  displayFavoriteCountries:Array<any> = []

  constructor(private dataCommunicationService:DataCommunicationService) { }

  ngOnInit(): void {
   this.displayFavoriteCountries = this.dataCommunicationService.sendToFavoriteCountries
  }

}
