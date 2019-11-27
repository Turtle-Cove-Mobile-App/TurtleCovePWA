import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tc-pwa-prompt',
  templateUrl: './pwa-prompt.component.html',
  styleUrls: ['./pwa-prompt.component.scss'],
})
export class PwaPromptComponent implements OnInit {

  public showInstallPrompt = false;

  constructor(private platform: Platform) {
    if (this.platform.is('mobileweb') && this.platform.is('mobile') && !this.platform.is('pwa')) {
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
