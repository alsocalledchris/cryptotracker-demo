import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CurrentPriceResponse } from 'src/app/models/current-price-response';
import { ICurrentPriceService } from 'src/app/services/current-price/current-price.service';
import { CurrentPriceComponent } from './current-price.component';
import { CoinbaseService } from 'src/app/services/current-price/coinbase.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('CurrentPriceComponent', () => {
  let component: CurrentPriceComponent;
  let fixture: ComponentFixture<CurrentPriceComponent>;
  let currentPriceServiceMock: ICurrentPriceService;

  const QUERY_FOR_MANUAL_REFRESH_BUTTON =
    '[data-test-id="manuallyRefreshButton"]';

  let currentPriceMock: CurrentPriceResponse = {
    eurRate: 1.0,
    gbpRate: 1.0,
    lastUpdated: '2022',
    usdRate: 1.0,
  };
  let newCurrentPriceMock: CurrentPriceResponse = {
    eurRate: 1.1,
    gbpRate: 1.2,
    lastUpdated: '2023',
    usdRate: 1.3,
  };

  beforeEach(async () => {
    const config = TestBed.configureTestingModule({
      declarations: [CurrentPriceComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    currentPriceServiceMock = TestBed.inject(CoinbaseService);
    spyOn(currentPriceServiceMock, 'get').and.returnValues(
      of(currentPriceMock),
      of(newCurrentPriceMock)
    );
    await config.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('when first shown the latest price is retrieved and shown', fakeAsync(() => {
    // Assert
    expect(currentPriceServiceMock.get).toHaveBeenCalled();
    expect(component.lastUpdated).toEqual(currentPriceMock.lastUpdated);
  }));

  it('when I click to get prices manually then the lastupdated value should be updated', fakeAsync(() => {
    // Arrange
    spyOn(component, 'getLatestPrice').and.callThrough();
    let manuallyRefreshButton =
      fixture.debugElement.nativeElement.querySelector(
        QUERY_FOR_MANUAL_REFRESH_BUTTON
      );

    // Act
    manuallyRefreshButton.click();
    tick();
    fixture.detectChanges();

    // Assert
    expect(component.getLatestPrice).toHaveBeenCalled();
    expect(currentPriceServiceMock.get).toHaveBeenCalled();
    expect(component.lastUpdated).toEqual(newCurrentPriceMock.lastUpdated);
  }));

  it('when I click start auto refresh then the manual refresh button is disabled', () => {
    // Arrange
    let switchAutoUpdateButton =
      fixture.debugElement.nativeElement.querySelector(
        '[data-test-id="switchAutoUpdateButton"]'
      );

    let manuallyRefreshButton =
      fixture.debugElement.nativeElement.querySelector(
        QUERY_FOR_MANUAL_REFRESH_BUTTON
      );

    // Act
    switchAutoUpdateButton.click();
    fixture.detectChanges();

    // Assert
    expect(manuallyRefreshButton.disabled).toBeTruthy();
    expect(component.isAutoUpdating).toBeTruthy();
  });
});
