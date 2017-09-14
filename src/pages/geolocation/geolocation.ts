import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the GeolocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
})
export class GeolocationPage {
  location: {lat: number, long: number};
  autoLocation: {lat: number, long: number};
  
  constructor(private geolocation: Geolocation, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      this.autoLocation = {lat: data.coords.latitude,
        long: data.coords.longitude};
        let autolocationtoast = this.toastCtrl.create({
          message: 'AutoLocation:' + this.autoLocation,
          duration: 3000
        });
        autolocationtoast.present();
      });
  }

  getGeolocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.location = {lat: resp.coords.latitude,
                      long: resp.coords.longitude};
      let locationtoast = this.toastCtrl.create({
        message: 'Location:' + this.location,
        duration: 3000
      });
      locationtoast.present();
              
     }).catch((error) => {
        let errortoast = this.toastCtrl.create({
          message: 'Error' + error.message,
          duration: 3000
        });
       console.log('Error getting location', error);
       errortoast.present();
     });
  }
}
