import { Observable } from "rxjs";
import { CurrentPriceResponse } from "../../models/current-price-response";

/// Interface that providers must implement to give us the current price
export interface ICurrentPriceService {
  get(): Observable<CurrentPriceResponse>;
}