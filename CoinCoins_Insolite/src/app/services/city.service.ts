import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FileCity } from '../interface/filecity';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  private getUrl(city_name: string,): string
    {
        let apiUrl = environment.city.baseUrl;
        let querySeparator = (apiUrl.indexOf('?') != -1)
        ? '&'
        : '?';

        return (apiUrl + querySeparator + `q=${city_name}&type=municipality`);
    }

  public getConfig(city_name): Observable<FileCity> {
    var configUrl = this.getUrl(city_name);
    return this.http.get<FileCity>(configUrl);
  }

}
