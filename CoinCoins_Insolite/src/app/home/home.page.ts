import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { CityService } from '../services/city.service';
import { FileCity } from '../interface/filecity';
import { City } from '../interface/city';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items;
  isItemAvailable = false;
  city: City;

  constructor(private router: Router, private city_api: CityService) {}

  private showConfig(city_name: string) {
    return this.city_api.getConfig(city_name).subscribe((resp: FileCity) =>
     {
      this.items = resp.features;
       return this.items;
    });
  }

  private getItems(ev: any) {
    const val = ev.target.value;
    if (val == ''){
      this.isItemAvailable = false;
    }
    if (val && val.trim() != '') {
      this.showConfig(val);
      this.items = this.items.slice(0, 4);
      this.isItemAvailable = true;
    }
    if (this.items.length == 0){
      this.isItemAvailable = false;
    }
  }

  private getCity(city) {
    let navigationExtras: NavigationExtras = {
      state: {
        city
      }
    };
    this.router.navigate(['nearby-place'], navigationExtras);
  }
}
