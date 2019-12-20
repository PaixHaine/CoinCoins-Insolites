import { Component, OnInit } from '@angular/core';

class RequestOptions {
  constructor(param: {headers: Headers}) {

  }

}

@Component({
  selector: 'app-nearby-place',
  templateUrl: './nearby-place.page.html',
  styleUrls: ['./nearby-place.page.scss'],
})
export class NearbyPlacePage implements OnInit {
  private http: any;


  constructor() { }

  ngOnInit() {
  }


  //
  // sendPostRequest() {
  //   const headers = new Headers();
  //   headers.append('Accept', 'application/json');
  //   headers.append('Content-Type', 'application/json' );
  //   const requestOptions = new RequestOptions({ headers });
  //
  //   const postData = {
  //     adresse,
  //     photo,
  //     description
  //   };
  //
  //   this.http.post('http://', postData, requestOptions)
  //       .subscribe(data => {
  //         console.log(data._body);
  //       }, error => {
  //         console.log(error);
  //       });
  // }
}

