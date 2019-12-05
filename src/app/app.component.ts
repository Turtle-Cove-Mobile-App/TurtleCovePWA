import { PluginsService } from 'src/app/services/plugins-service/plugins.service';
import { Component } from '@angular/core';

import { Plugins, StatusBarStyle } from '@capacitor/core';
const { StatusBar, SplashScreen } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(private plugins: PluginsService) {
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
