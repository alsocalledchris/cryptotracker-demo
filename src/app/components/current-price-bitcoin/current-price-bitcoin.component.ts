import { Component, OnInit } from '@angular/core';
import { CurrentPriceCoinbaseService } from 'src/app/services/current-price/current-price-coinbase.service';
import { CurrentPriceService } from 'src/app/services/current-price/current-price.service';

/**
 * Bitcoin implementation of current price using Coinbase for the current price service
 */
@Component({
  selector: 'app-current-price-bitcoin',
  template: `<app-current-price
    [title]="'Bitcoin Current Price'"
  ></app-current-price>`,
  providers: [
    { provide: CurrentPriceService, useClass: CurrentPriceCoinbaseService },
  ],
})
export class CurrentPriceBitcoinComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
