import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Browser } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class InAppBrowserService {
  constructor() {}

  openUrl(url) {
    Browser.open({ url });
  }
}
