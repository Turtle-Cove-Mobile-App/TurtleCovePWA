import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
// const { Browser, Geolocation } = Plugins;
const { Browser } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PluginsService {
  // public location = [0, 0];

  private isToastOpen = false;

  // private watch;

  constructor(private toastController: ToastController) {
    // HACK: fix toast not presented when offline, due to lazy loading the toast controller.
    // Can be removed once #17450 is resolved: https://github.com/ionic-team/ionic/issues/17450
    this.toastController.create({ animated: false }).then(t => { t.present(); t.dismiss(); });
  }

  openUrl(url) {
    if (navigator.onLine) {
      Browser.open({ url });
    }
    else {
      this.presentToastWithOptions();
    }
  }

  async presentToastWithOptions() {
    console.log(this.isToastOpen);
    if (!this.isToastOpen) {
      const toast = await this.toastController.create({
        header: 'Failed to load...',
        message: 'This feature requires an internet connection',
        color: 'dark',
        position: 'bottom',
        buttons: [
          {
            text: 'Close',
            handler: () => {
              console.log('Cancel clicked');
              this.isToastOpen = false;
            }
          }
        ]
      });
      toast.present().then(() => this.isToastOpen = true);
    }
  }

  // subscribeLocation() {
  //   Geolocation.getCurrentPosition()
  //     .then(res => {
  //       if (res.coords) {
  //         this.location[0] = res.coords.latitude;
  //         this.location[1] = res.coords.longitude;
  //         console.log('Got positon');
  //       }
  //     })
  //     .then(() => {
  //       this.watch = Geolocation.watchPosition({}, data => {
  //         if (data.coords) {
  //           this.location[0] = data.coords.latitude;
  //           this.location[1] = data.coords.longitude;
  //           console.log('Got watch');
  //         }
  //       });
  //     })
  //     .then(() => {
  //       console.log('Subscribed to geolocation.');
  //     });
  // }

  // unsubscribeLocation() {
  //   Geolocation.clearWatch(this.watch);
  //   console.log('Unsubscribed from geolocation');
  // }
}
