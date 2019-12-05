import { Platform } from '@ionic/angular';
import { Component, OnInit } from "@angular/core";
import { PluginsService } from 'src/app/services/plugins-service/plugins.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: "tc-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {

  private isToastOpen = false;
  public online = window.navigator.onLine;

  constructor(private plugins: PluginsService, public platform: Platform, public toastController: ToastController) {}

  ngOnInit() {}

  openUrl(url: string) {
    this.plugins.openUrl(url);
  }

  logLocation() {
    console.log(this.plugins.location);
  }

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

  buttonHandler(url) {
    if (this.online) {
      this.plugins.openUrl(url);
    } else {
      this.presentToastWithOptions();
    }
  }

}
