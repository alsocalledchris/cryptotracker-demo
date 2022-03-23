import { Component, OnInit } from '@angular/core';
import { CurrentPriceFakeService } from 'src/app/services/current-price/current-price-fakecoin.service';
import { CurrentPriceService } from 'src/app/services/current-price/current-price.service';

/**
 * Fakecoin implementation of current price using FakeService for the current price service
 */
@Component({
  selector: 'app-current-price-fakecoin',
  template: `<app-current-price
    [title]="'Fakecoin Current Price'"
  ></app-current-price>`,
  providers: [
    { provide: CurrentPriceService, useClass: CurrentPriceFakeService },
  ],
})
export class CurrentPriceFakeCoinComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
