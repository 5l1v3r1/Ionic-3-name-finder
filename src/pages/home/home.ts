import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhoneProvider } from '../../providers/phone/phone';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
     name: string;
     mobile:string;
     provider: string;
     state: string;
     phone='';
   constructor(public navCtrl: NavController, public phoneProvider: PhoneProvider) {

  }

  getData() {
    this.phoneProvider.getDetails(this.phone).then(data => {
      this.name = data.result.name;
      this.mobile = data.result.mobile;
      this.provider = data.result.provider;
      this.state = data.result.state;
    });
  }
}
