import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentPriceComponent } from './components/current-price/current-price.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TickerGraphComponent } from './components/ticker-graph/ticker-graph.component';
import { BitcoinComponent } from './components/current-price-bitcoin/current-price-bitcoin.component';
import { CurrentPricesComponent } from './components/current-prices/current-prices.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentPriceComponent,
    TickerGraphComponent,
    BitcoinComponent,
    CurrentPricesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
