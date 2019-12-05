import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'tc-gw-tour',
  templateUrl: './gw-tour.page.html',
  styleUrls: ['./gw-tour.page.scss'],
})
export class GwTourPage implements OnInit {

  private isToastOpen = false;

  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }

  // ionViewWillEnter() {
  //   this.plugins.subscribeLocation();
  // }

  // ionViewDidLeave() {
  //   this.plugins.unsubscribeLocation();
  // }

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

  // logLocation() {
  //   console.log(this.plugins.location);
  // }

  buttonHandler() {
    if (navigator.onLine) {
      window.open('https://goo.gl/maps/gkSE8GiJMzcfuCRu9', '_blank');
    } else {
      this.presentToastWithOptions();
    }
  }

}
