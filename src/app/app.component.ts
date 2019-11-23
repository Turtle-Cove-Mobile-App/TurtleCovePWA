import { Component } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Plugins, StatusBarStyle } from '@capacitor/core';
const { StatusBar, SplashScreen } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public prod = environment.production;

  constructor() {
    this.initializeApp();
  }

  initializeApp() {
    StatusBar.setStyle({
      style: StatusBarStyle.Dark
    });
    StatusBar.setBackgroundColor({color: '#08582e'});
    SplashScreen.hide();
  }
}
