import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Map, tileLayer, marker, icon } from 'leaflet';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  constructor(public http: Http,
    public plt: Platform,
    public router: Router) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.plt.ready().then(() => {
      this.http.get('https://oghuxxw1e6.execute-api.us-east-1.amazonaws.com/dev')
      .pipe(map(res => res.json()))
      .subscribe(restaurants => this.initMap(restaurants));
    });
  }

  initMap(restaurants) {
    const map = new Map('map').setView([33.6396965, -84.4304574], 23);

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const customMarkerIcon = icon({
      iconUrl: 'assets/icon/favicon.png',
      iconSize: [64, 64],
      popupAnchor: [0, -20]
    });

    restaurants.forEach((restaurant) => {
      marker([restaurant.position.lat, restaurant.position.lgn], {icon: customMarkerIcon})
      .bindPopup(`<b>${restaurant.title}</b>`, { autoClose: false })
      .on('click', () => this.router.navigateByUrl('/restaurant'))
      .addTo(map).openPopup();
    });
  }

}
