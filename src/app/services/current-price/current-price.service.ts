import { Observable } from "rxjs";
import { CurrentPriceResponse } from "../../models/current-price-response";

/**
 * Class that current price providers must implement to give us the current price
 */
export class CurrentPriceService {
  get(): Observable<CurrentPriceResponse> {
    throw new Error('Class must be implemented')
  }
}