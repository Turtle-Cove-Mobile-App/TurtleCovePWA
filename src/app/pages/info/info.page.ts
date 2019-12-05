import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'tc-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  public historyExpanded = false;
  public whatGoesOnExpanded = false;
  private isToastOpen = false;
  public online = window.navigator.onLine;

  constructor(public toastController: ToastController) { }

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

  buttonHandler() {
    if (this.online) {
      window.open('https://goo.gl/maps/mqcqMtYzFSaTokYRA', '_blank');
    } else {
      this.presentToastWithOptions();
    }
  }

  toggleHistory() {
    if (this.historyExpanded === false) {
      this.historyExpanded = true;
    } else {
      this.historyExpanded = false;
    }
  }

  toggleWhatGoesOn() {
    if (this.whatGoesOnExpanded === false) {
      this.whatGoesOnExpanded = true;
    } else {
      this.whatGoesOnExpanded = false;
    }
  }

  ngOnInit() {
  }

}
