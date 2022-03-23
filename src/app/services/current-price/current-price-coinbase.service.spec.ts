import { getTestBed, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { CurrentPriceCoinbaseService } from './current-price-coinbase.service';

describe('CoinbaseService', () => {
  let service: CurrentPriceCoinbaseService;
  let httpMock: HttpTestingController;
  let injector: TestBed;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CurrentPriceCoinbaseService],
    });
    injector = getTestBed();
    service = TestBed.inject(CurrentPriceCoinbaseService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    // Ensure no outstanding requests
    httpMock.verify();
  });

  it('get should return current price response', () => {
    const mockResponse = {
      time: {
        updated: 'Mar 21, 2022 18:33:00 UTC',
        updatedISO: '2022-03-21T18:33:00+00:00',
        updateduk: 'Mar 21, 2022 at 18:33 GMT',
      },
      disclaimer: 'Test',
      chartName: 'Bitcoin',
      bpi: {
        USD: {
          code: 'USD',
          symbol: '&#36;',
          rate: '41,136.6751',
          description: 'United States Dollar',
          rate_float: 41136.6751,
        },
        GBP: {
          code: 'GBP',
          symbol: '&pound;',
          rate: '31,219.8980',
          description: 'British Pound Sterling',
          rate_float: 31219.898,
        },
        EUR: {
          code: 'EUR',
          symbol: '&euro;',
          rate: '37,292.4528',
          description: 'Euro',
          rate_float: 37292.4528,
        },
      },
    };

    service.get().subscribe((response) => {
      expect(response.usdRate).toEqual(mockResponse.bpi.USD.rate_float);
      expect(response.lastUpdated).toEqual(mockResponse.time.updated);
    });

    const req = httpMock.expectOne(`${service.URL}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
