import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhoneProvider } from '../../providers/phone/phone';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    name: any;
    mobile: any;
    provider: any;
    state: any;
   constructor(public navCtrl: NavController, public phoneProvider: PhoneProvider) {
   
  }
 
  getData() {
    this.phoneProvider.getDetails()
    .then(data => {
      this.name = data.result.name;
      this.mobile = data.result.mobile;
      this.provider = data.result.provider;
      this.state = data.result.state;
      console.log(this.name);
    });
  }
}
