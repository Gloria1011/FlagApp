import { Component, OnInit } from '@angular/core';
import { DataCommunicationService } from '../data-communication.service';

@Component({
  selector: 'app-learn-more',
  templateUrl: './learn-more.component.html',
  styleUrls: ['./learn-more.component.scss']
})
export class LearnMoreComponent implements OnInit {

moreDetailsPerCountry:Array<any> = []

  constructor(private dataCommunicationService: DataCommunicationService) { }

  ngOnInit(): void {
    this.moreDetailsPerCountry = this.dataCommunicationService.sendToFavoriteCountries
  }

}
