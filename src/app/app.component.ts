import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Plugins, StatusBarStyle } from '@capacitor/core';
const { StatusBar, SplashScreen } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  public prod = environment.production;

  public showInstallPrompt = false;

  constructor(public platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    StatusBar.setStyle({
      style: StatusBarStyle.Dark
    });
    StatusBar.setBackgroundColor({ color: '#08582e' });
    SplashScreen.hide();
    if (this.platform.is("mobileweb") && this.platform.is("mobile") && !this.platform.is("pwa")) {
      this.showInstallPrompt = true;
    }
  }

  ngOnInit() {
    if (this.showInstallPrompt) {
      const promptContainer = window.document.getElementById('prompt-container');
      console.log(promptContainer);
      setTimeout(() => {
        promptContainer.style.visibility = 'visible';
        promptContainer.style.opacity = '100%';
      }, 2000);
    }
  }
}
