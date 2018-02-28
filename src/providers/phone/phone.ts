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
  constructor(public http: HttpClient) {
    console.log('Hello PhoneProvider Provider');
     this.url = 'http://localhost:8100/api/7708545125';
  }
getDetails() {
  return new Promise(resolve => {
    this.http.get(this.url).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}
}
