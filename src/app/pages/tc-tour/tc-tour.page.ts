import { ImageViewService } from 'src/app/services/image-view/image-view.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';
import { ZoomComponent } from 'src/app/shared/zoom/zoom.component';


@Component({
  selector: 'tc-tc-tour',
  templateUrl: './tc-tour.page.html',
  styleUrls: ['./tc-tour.page.scss'],
})
export class TcTourPage implements OnInit {

  public primColor = 'primary';

  // constructor(public popoverController: PopoverController, private storage: Storage, private alertController: AlertController) {}
  constructor(private modalCtrl: ModalController, public imgService: ImageViewService, private alertController: AlertController) {}

  ngOnInit() {
    // this.total = this.signs.length;
    this.imgService.setSigns(new Array(this.imgService.total).fill({viewed: false}).map(item => ({viewed: item.viewed})));
  }

  async showZoom(id) {
    const modal = await this.modalCtrl.create({
      component: ZoomComponent,
      componentProps: {
        index: id,
        // signs: this.imgService.signs
      }
    });
    await modal.present();
    this.imgService.viewSign(id);
  }

  async reset() {
    const alert = await this.alertController.create({
      header: 'Reset All',
      message:
        'Are you sure you want to reset all of the signs? This cannot be undone!',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => this.imgService.reset()
        }
      ]
    });

    await alert.present();
  }

  public getColor(viewed): string {
    if (viewed) {
      return 'medium';
    } else {
      return 'primary';
    }
  }

}
