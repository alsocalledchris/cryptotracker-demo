import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentPriceComponent } from './components/current-price/current-price.component';

import { NgApexchartsModule } from 'ng-apexcharts';
import { TickerGraphComponent } from './components/ticker-graph/ticker-graph.component';

@NgModule({
  declarations: [AppComponent, CurrentPriceComponent, TickerGraphComponent],
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
