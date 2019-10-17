import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Browser, Geolocation } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PluginsService {
  public location = [0, 0];

  private watch;

  constructor() {}

  openUrl(url) {
    Browser.open({ url });
  }

  subscribeLocation() {
    Geolocation.getCurrentPosition()
      .then(res => {
        if (res.coords) {
          this.location[0] = res.coords.latitude;
          this.location[1] = res.coords.longitude;
          console.log('Got positon');
        }
      })
      .then(() => {
        this.watch = Geolocation.watchPosition({}, data => {
          if (data.coords) {
            this.location[0] = data.coords.latitude;
            this.location[1] = data.coords.longitude;
            console.log('Got watch');
          }
        });
      })
      .then(() => {
        console.log('Subscribed to geolocation.');
      });
  }

  unsubscribeLocation() {
    Geolocation.clearWatch(this.watch);
    console.log('Unsubscribed from geolocation');
  }
}
