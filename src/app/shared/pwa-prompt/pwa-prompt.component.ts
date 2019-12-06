import { Storage } from '@ionic/storage';
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

  public dontShowAgain = false;

  private promptContainer;

  constructor(public platform: Platform, private storage: Storage) {
  }

  ngOnInit() {
    this.storage.get('dontShowPrompt').then(bool => {
      if (bool) {
        this.dontShowAgain = (bool === 'true');
        if (this.platform.is('mobileweb') && this.platform.is('mobile') && !this.platform.is('pwa') && !this.dontShowAgain) {
          this.showInstallPrompt = true;
        }
      }
      else {
        if (this.platform.is('mobileweb') && this.platform.is('mobile') && !this.platform.is('pwa')) {
          this.showInstallPrompt = true;
        }
      }
      if (this.showInstallPrompt) {
        if (this.platform.is('ios')) {
          this.showPrompt();
        }
        else {
          window.addEventListener('beforeinstallprompt', () => {
            this.showPrompt();
          });
        }
      }
    });
  }

  showPrompt() {
    this.promptContainer = window.document.getElementById('prompt-container');
    // console.log(this.promptContainer);
    setTimeout(() => {
      this.promptContainer.style.visibility = 'visible';
      this.promptContainer.style.opacity = '1.0';
      this.promptVisible = true;
    }, 2000);
  }

  hidePrompt() {
    // console.log('close button pressed');
    if (this.promptVisible) {
      this.promptContainer.style.visibility = 'hidden';
      this.promptContainer.style.opacity = '0.0';
      this.promptVisible = false;
    }
  }

  checkChanged() {
    console.log('Thing changed');
    this.storage.set('dontShowPrompt', this.dontShowAgain.toString());
  }
}
