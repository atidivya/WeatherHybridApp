import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Weather provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Weather {

  apiKey = 'd4fac41cdd08fc0a';
  url;

  constructor(public http: Http) {
    console.log('Hello Weather Provider');
    this.url = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';

  }
  getWeather(city, state){
    return this.http.get(this.url+'/'+state+'/'+city+'.json')
      .map(res => res.json());
  }

}
