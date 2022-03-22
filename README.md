# CryptoTracker Angular Demo App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6. It uses the free [Coindesk API](https://api.coindesk.com/v1/bpi/currentprice.json) to get the latest Bitcoin price and show in a ticker graph for an example app. It demonstrates the use of HttpClient, Obervables, Subscriptions, Routing (although only one route in this example so far) and  Unit testing with mock data and spying on function calls etc.
 
Graph shown with open source [Apexcharts]( https://apexcharts.com/angular-chart-demos/) library. Leave running with 'auto-refresh' enabled to see a nice line graph drawn and updated every minute.

[Bootstrap](https://getbootstrap.com/) is used for the theming (although custom CSS using BEM naming convention with SASS is preferred when possible)

## To get going

Run `npm install` to get all the dependancies

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### This is a Demo App Only

This is a demo app only for using Angular to solve a real-world-problem. Disclaimer: The coinbase API states: "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org"
