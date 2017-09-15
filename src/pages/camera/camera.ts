import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  readonly options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };
  imgSrc: any;
  
  constructor(private camera: Camera,  private toastCtrl: ToastController) {
  }
  takePicture(){
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.imgSrc = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      let errortoast = this.toastCtrl.create({
        message: 'Error' + err.message,
        duration: 3000
      });
     console.log('Error getting picture', err);
     errortoast.present();
       });
  }
  
}
