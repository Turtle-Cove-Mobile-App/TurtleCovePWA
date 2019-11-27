import { Platform } from '@ionic/angular';
import { Component } from '@angular/core';

import { Plugins, StatusBarStyle } from '@capacitor/core';
const { StatusBar, SplashScreen } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(public platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    StatusBar.setStyle({
      style: StatusBarStyle.Dark
    });
    StatusBar.setBackgroundColor({ color: '#08582e' });
    SplashScreen.hide();
  }
}
