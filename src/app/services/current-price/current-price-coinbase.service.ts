import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { CurrentPriceResponse } from 'src/app/models/current-price-response';
import { CurrentPriceService } from './current-price.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CurrentPriceCoinbaseBitcoinResponse } from './current-price-coinbase-bitcoin-response';


/**
 * Service to get the current price of Bitcoins from Coinbase
 */
@Injectable()
export class CurrentPriceCoinbaseService implements CurrentPriceService {
  readonly URL = 'https://api.coindesk.com/v1/bpi/currentprice.json';

  constructor(private _httpClient: HttpClient) {}

  get(): Observable<CurrentPriceResponse> {
    return this._httpClient.get<CurrentPriceCoinbaseBitcoinResponse>(this.URL).pipe(
      retry(3),
      catchError(this.handleError),
      map(
        (value) =>
          ({
            lastUpdated: value.time.updated,
            eurRate: value.bpi.EUR.rate_float,
            gbpRate: value.bpi.GBP.rate_float,
            usdRate: value.bpi.USD.rate_float,
          } as CurrentPriceResponse)
      )
    );
  }

  /// From the Angular docs
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('An error has occurred; please try again later.')
    );
  }
}
