import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NearbyPlacePage } from './nearby-place.page';

const routes: Routes = [
  {
    path: '',
    component: NearbyPlacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NearbyPlacePageRoutingModule {}
