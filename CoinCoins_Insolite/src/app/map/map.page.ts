import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MapService } from '../services/map.service';
import { City } from '../interface/city';


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  data: City;

  constructor(private router: Router, private map: MapService) {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.city;
      }
    }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let lat = this.data.geometry.coordinates[0]
    let long = this.data.geometry.coordinates[1]
    this.map.getPlaces(lat, long);
  }

}
