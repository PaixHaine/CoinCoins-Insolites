import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Map, tileLayer, marker, icon } from 'leaflet';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient, private plt: Platform) { }

  private getUrl(lat: number, lng: number): string
  {
    let apiUrl = environment.map.baseUrl;
    let querySeparator = (apiUrl.indexOf('?') != -1)
    ? '&'
    : '?';
    return (apiUrl + querySeparator + `lat=${lat}&long=${lng}`);
  }

  public getPlaces(lat, lng){
    let url = this.getUrl(lat, lng);
    let places =
    [
      {
        "title":"Le Louvre",
        "city_name":"Paris",
        "image":"assets/images/louvre.jpeg",
        "position":
        {"lat":48.864824,
        "lgn":2.334595},
      },
      {
        "title": "Deyrolle",
        "city_name":"Paris",
        "image":"assets/images/deyrolle.jpg",
        "position":
        {"lat":48.8565418,
        "lgn":2.3264705},
      },
      {
        "title":"Cour du Commerce Saint-André",
        "city_name":"Paris",
        "image":"assets/images/courducommerce.jpg",
        "position":
        {"lat":48.8530736,
        "lgn":2.3390876},
      }
    ]
    this.initMap(places ,lat , lng);
    // this.plt.ready().then(() => {
    //   this.http.get(url)
    //   .pipe(map(res => res))
    //   .subscribe(places => this.initMap(places, lat, lng));
    // });
  }

  private initMap(places, lat_city, lng_city) {
    const map = new Map('map').setView([lat_city, lng_city], 20);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  const customMarkerIcon = icon({
    iconUrl: 'assets/icon/marker.svg',
    iconSize: [64, 64],
    popupAnchor: [0, -20],
    popupAnchorSize: [64,64]
  });

  places.forEach((place) => {
    marker([place.position.lat, place.position.lgn], {icon: customMarkerIcon})
    .bindPopup(
      `<p>${place.title}</p><p>${place.city_name}</p><img src="${place.image}"/>`,
      { autoClose: true }
      )
      // .on('click', () => this.router.navigateByUrl('/restaurant'))
      .addTo(map).openPopup();
    });
  }
}

