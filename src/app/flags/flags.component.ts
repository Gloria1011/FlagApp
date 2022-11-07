import { Component, OnInit } from '@angular/core';
import { DataCommunicationService } from '../data-communication.service';
import { FlagApiService } from '../flag-api.service';

@Component({
  selector: 'app-flags',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.scss']
})
export class FlagsComponent implements OnInit {

  countryName: string = 'canada';
  language: string = 'es';
  currencyOfCountry: string = 'euro';

  flags: any[] = [];
  flag: any;

  constructor(private dataCommunicationService: DataCommunicationService,
    private flagApiService: FlagApiService) { }

  ngOnInit(): void {
    // when component load event
    this.getFlags()
  }

  learnMore(flag: string) {
    this.dataCommunicationService.passedFlag(flag)
  }

  // flag object = country 2
  sendToFavorite(countrytwo: any) {
    this.dataCommunicationService.passedFlag(countrytwo)
  }

  // when we trigger submit event
  onSubmit() {
    this.flagApiService.getFlag(this.countryName).subscribe((response: any) => {
      this.flags = response
    })
  }

  submitByLang() {
    this.flagApiService.getFlagByLang(this.language).subscribe((response: any) => {
      this.flags = response
    })
  }

  submitByCurrency() {
    this.flagApiService.getFlagByCurrency(this.currencyOfCountry).subscribe((response: any) => {
      this.flags = response

    })
  }

  getFlags() {
    this.flagApiService.getFlags()
      .subscribe((response: any) => {
        console.log(response)
        this.flags = response
      })
  }

}
