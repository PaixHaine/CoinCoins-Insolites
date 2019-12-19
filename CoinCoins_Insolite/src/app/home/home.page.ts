import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedCountry: string;//declare global variable
  countries;

  initializeListCountries(){
  this.countries = ["Ram","gopi", "dravid"];
  }

  selectCountry(country) {
      this.selectedCountry = country;
      console.log(this.selectedCountry);
  }

  search(event) {
    console.log(event);
    this.initializeListCountries();
    console.log(this.countries);
    const val = event.target.value;
    if (val && val.trim() != '') {
        this.countries = this.countries.filter((country) => {
            return (country.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }
  }
