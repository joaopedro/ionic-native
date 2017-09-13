import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Vibration } from '@ionic-native/vibration';

/**
 * Generated class for the VibrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()  
@Component({
  selector: 'page-vibration',
  templateUrl: 'vibration.html',
})
export class VibrationPage {

  constructor(private vibration: Vibration) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VibrationPage');
  }

  vubrate(){
    this.vibration.vibrate(2000);
  }

  vibratePattern(){
    this.vibration.vibrate([2000,1000,500]);
  }
}
