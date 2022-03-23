import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentPricesComponent } from './components/current-prices/current-prices.component';

const routes: Routes = [{ path: '', component: CurrentPricesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
