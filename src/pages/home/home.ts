import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';
import { PhoneProvider } from '../../providers/phone/phone';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
     name: string =' ';
     mobile:string=' ';
     provider: string=' ';
     state: string=' ';
     phone='7708545125';
     show: boolean = false;
   constructor(public navCtrl: NavController, public phoneProvider: PhoneProvider,public loadingCtrl: LoadingController) {

  }

   getData() {
   let loader = this.loadingCtrl.create({
      content: "Please wait...",
     
    });
    loader.present();
     this.phoneProvider.getDetails(this.phone).subscribe(data => {
        this.name=data.result.name;
        this.mobile=data.result.mobile;
        this.provider=data.result.provider;
        this.state=data.result.state;
        this.show=true;
});
if(this.name!=null)
  loader.dismiss();
  }

}

