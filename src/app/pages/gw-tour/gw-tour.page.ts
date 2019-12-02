import { PluginsService } from '../../services/plugins-service/plugins.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'tc-gw-tour',
  templateUrl: './gw-tour.page.html',
  styleUrls: ['./gw-tour.page.scss'],
})
export class GwTourPage implements OnInit {

  private isToastOpen = false;

  constructor(public plugins: PluginsService, public toastController: ToastController) { }

  ngOnInit() {

  }

  buttonClickHandler() {
      // beep boop check if near coordinates

  }

  async presentToastWithOptions() {
    console.log(this.isToastOpen);
    if (!this.isToastOpen) {
      const toast = await this.toastController.create({
        header: 'Failed to start tour...',
        message: 'Please navigate to Hwy 51',
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


  ionViewWillEnter() {
    this.plugins.subscribeLocation();
  }

  ionViewDidLeave() {
    this.plugins.unsubscribeLocation();
  }

  logLocation() {
    console.log(this.plugins.location);
  }

}
