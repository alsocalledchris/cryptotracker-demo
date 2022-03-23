import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentPriceBitcoinComponent } from './components/current-price-bitcoin/current-price-bitcoin.component';
import { CurrentPriceFakeCoinComponent } from './components/current-price-fakecoin/current-price-fakecoin.component';

const routes: Routes = [
  { path: '', component: CurrentPriceBitcoinComponent },
  { path: 'fake', component: CurrentPriceFakeCoinComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
