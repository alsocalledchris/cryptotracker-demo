import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { CurrentPrice } from 'src/app/models/current-price';
import { CurrentPriceService } from 'src/app/services/current-price/current-price.service';

/**
 * Displays the current price in multiple currencies via graphs that
 * can be auto-updated
 */
@Component({
  selector: 'app-current-price',
  templateUrl: './current-price.component.html',
  styleUrls: ['./current-price.component.scss'],
})
export class CurrentPriceComponent implements OnInit, OnDestroy {
  readonly UPDATE_INTERVAL_IN_MS: number = 60000;
  lastUpdated: string | undefined;
  autoUpdateTicker: Subscription = new Subscription();
  isAutoUpdating = false;

  // Tickers contain the current price over time
  usdTicker = new Array<CurrentPrice>();
  gbpTicker = new Array<CurrentPrice>();
  eurTicker = new Array<CurrentPrice>();

  constructor(private _currentPriceService: CurrentPriceService) {}

  ngOnInit(): void {
    this.setupAutoUpdate();
    this.getLatestPrice();
  }

  ngOnDestroy(): void {
    this.autoUpdateTicker.unsubscribe();
  }

  switchAutoUpdate(): void {
    this.isAutoUpdating = !this.isAutoUpdating;
  }

  getLatestPrice(): void {
    this._currentPriceService.get().subscribe((data) => {
      this.lastUpdated = data.lastUpdated;
      if (this.usdTicker.findIndex((x) => x.date === data.lastUpdated) === -1) {
        this.usdTicker.push({ date: data.lastUpdated, rate: data.usdRate });
        this.usdTicker = [...this.usdTicker];
      }
      if (this.eurTicker.findIndex((x) => x.date === data.lastUpdated) === -1) {
        this.eurTicker.push({ date: data.lastUpdated, rate: data.eurRate });
        this.eurTicker = [...this.eurTicker];
      }
      if (this.gbpTicker.findIndex((x) => x.date === data.lastUpdated) === -1) {
        this.gbpTicker.push({ date: data.lastUpdated, rate: data.gbpRate });
        this.gbpTicker = [...this.gbpTicker];
      }
    });
  }

  private setupAutoUpdate(): void {
    this.autoUpdateTicker = timer(0, this.UPDATE_INTERVAL_IN_MS).subscribe(
      () => {
        if (this.isAutoUpdating) {
          this.getLatestPrice();
        }
      }
    );
  }
}
