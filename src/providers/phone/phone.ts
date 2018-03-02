import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the PhoneProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PhoneProvider {
   url;
   ph:string;
  constructor(public http: Http) {
    console.log('Hello PhoneProvider Provider');
    this.ph=
     this.url = 'http://localhost:8100/api/'; //replace url with http:abutech.pythonanywhere.com/name/ when build apk
  }
  getDetails(ph){
     return this.http.get(this.url+ph)
       .map(res => res.json());
 }
}
