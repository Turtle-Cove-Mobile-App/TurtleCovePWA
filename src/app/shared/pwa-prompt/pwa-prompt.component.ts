import { Platform } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'tc-pwa-prompt',
  templateUrl: './pwa-prompt.component.html',
  styleUrls: ['./pwa-prompt.component.scss'],
})
export class PwaPromptComponent implements OnInit {

  @ViewChild('slider', { static: true }) slider;

  public showInstallPrompt = false;
  public promptVisible = false;

  private promptContainer;

  constructor(public platform: Platform) {
    if (this.platform.is('mobileweb') && this.platform.is('mobile') && !this.platform.is('pwa')) {
      this.showInstallPrompt = true;
    }
  }

  ngOnInit() {
    window.addEventListener('beforeinstallprompt', () => {
      this.promptContainer = window.document.getElementById('prompt-container');
      this.showPrompt();
    });
  }

  showPrompt() {
    if (this.showInstallPrompt) {
      // console.log(this.promptContainer);
      setTimeout(() => {
        this.promptContainer.style.visibility = 'visible';
        this.promptContainer.style.opacity = '100%';
        this.promptVisible = true;
      }, 2000);
    }
  }

  hidePrompt() {
    // console.log('close button pressed');
    if (this.promptVisible) {
      this.promptContainer.style.visibility = 'hidden';
      this.promptContainer.style.opacity = '0';
      this.promptVisible = false;
    }
  }

}
