import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

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
  
  constructor(private geolocation: Geolocation) {
  }

  ionViewDidLoad() {
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      this.autoLocation = {lat: data.coords.latitude,
        long: data.coords.longitude};
    });
  }

  getGeolocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.location = {lat: resp.coords.latitude,
                      long: resp.coords.longitude};
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
}
