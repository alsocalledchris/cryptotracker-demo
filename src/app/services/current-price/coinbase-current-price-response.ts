export interface CoinbaseCurrentPriceResponse {
  time: Time;
  disclaimer: string;
  chartName: string;
  bpi: Bpi;
}

export interface Time {
  updated: string;
  updatedISO: string;
  updateduk: string;
}

export interface Bpi {
  USD: CurrencyDetail;
  GBP: CurrencyDetail;
  EUR: CurrencyDetail;
}

export interface CurrencyDetail {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
}
