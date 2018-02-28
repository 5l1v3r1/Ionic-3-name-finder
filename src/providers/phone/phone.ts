import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PhoneProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PhoneProvider {
   url;
   ph:string;
  constructor(public http: HttpClient) {
    console.log('Hello PhoneProvider Provider');
    this.ph=
     this.url = 'http://localhost:8100/api/';
  }
getDetails(ph) {
  return new Promise(resolve => {
    this.http.get(this.url+ph).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}
}
