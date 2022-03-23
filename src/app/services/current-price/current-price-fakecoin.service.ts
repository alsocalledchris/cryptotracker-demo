import { Injectable } from '@angular/core';
import {  Observable, of } from 'rxjs';
import { CurrentPriceResponse } from 'src/app/models/current-price-response';
import { CurrentPriceService } from './current-price.service';

/**
 * Fake service to demo the ability to easily add another current price provider
 */
@Injectable()
export class CurrentPriceFakeService implements CurrentPriceService {
  constructor() {}

  get(): Observable<CurrentPriceResponse> {
    let dateTime = new Date();
    let eur = Number((Math.random() * (20 - 16) + 16).toFixed(2));
    let gbp = Number((Math.random() * (25 - 21) + 21).toFixed(2));
    let usd = Number((Math.random() * (5 - 2) + 2).toFixed(2));
    return of({
      lastUpdated: `${dateTime.toDateString()} ${dateTime.toLocaleTimeString()}`,
      eurRate: eur,
      gbpRate: gbp,
      usdRate: usd,
    } as CurrentPriceResponse);
  }
}
