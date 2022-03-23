import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CurrentPrice } from 'src/app/models/current-price';
import { ChartOptions } from './chart-options';

/**
 * Displays a graph showing the current rate over time
 */
@Component({
  selector: 'app-ticker-graph',
  templateUrl: './ticker-graph.component.html',
  styleUrls: ['./ticker-graph.component.scss'],
})
export class TickerGraphComponent implements OnInit, OnChanges {
  @Input()
  series!: Array<CurrentPrice>;
  @Input()
  title!: string;

  chartOptions: ChartOptions | undefined;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    // In order to redraw the chart with a new x and y
    // axis we need to reset the chart options with the
    // new values
    this.chartOptions = this.getChartOptions(
      changes['series'].currentValue,
      this.title
    );
  }

  ngOnInit(): void {
    this.chartOptions = this.getChartOptions(this.series, this.title);
  }

  private getChartOptions(
    currentPrice: Array<CurrentPrice>,
    title: string
  ): ChartOptions {
    // Example line chart from
    // https://apexcharts.com/angular-chart-demos/line-charts/basic/
    return {
      series: [
        {
          data: currentPrice.map((value) => value.rate),
        },
      ],
      chart: {
        height: 350,
        width: 650,
        type: 'line',
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: title,
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: currentPrice.map((value) => value.date),
      },
    };
  }
}
