import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NearbyPlacePageRoutingModule } from './nearby-place-routing.module';

import { NearbyPlacePage } from './nearby-place.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NearbyPlacePageRoutingModule
  ],
  declarations: [NearbyPlacePage]
})
export class NearbyPlacePageModule {}
