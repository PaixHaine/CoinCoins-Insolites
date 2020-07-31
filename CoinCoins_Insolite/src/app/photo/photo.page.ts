import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage implements OnInit {
  photos = this.photoService.photos;

  constructor(public photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.loadSaved();
  }

  takeGeoPhoto() {
    this.photoService.takePhoto();
  }

  getGeo() {
    this.photoService.getCurrentCoordinates();
    console.log(this.photoService.latitude);
    console.log(this.photoService.longitude);
  }


}
