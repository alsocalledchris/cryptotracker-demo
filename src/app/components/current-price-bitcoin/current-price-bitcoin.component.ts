import { Component, OnInit } from '@angular/core';
import { CurrentPriceCoinbaseService } from 'src/app/services/current-price/current-price-coinbase.service';
import { CurrentPriceService } from 'src/app/services/current-price/current-price.service';

/**
 * Bitcoin implementation of current price using Coinbase for the current price service
 */
@Component({
  selector: 'app-current-price-bitcoin',
  template: '<app-current-price></app-current-price>',
  providers: [{ provide: CurrentPriceService, useClass: CurrentPriceCoinbaseService }],
})
export class BitcoinComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
