import { ImageViewService } from 'src/app/services/image-view/image-view.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ZoomComponent } from 'src/app/shared/zoom/zoom.component';


@Component({
  selector: 'tc-tc-tour',
  templateUrl: './tc-tour.page.html',
  styleUrls: ['./tc-tour.page.scss'],
})
export class TcTourPage implements OnInit {

  public primColor = 'primary';

  private totalNumberOfSigns = 15;

  private signArray = new Array(this.totalNumberOfSigns).fill({ viewed: false }).map((item, index) => ({ viewed: item.viewed, path: 'assets/img/signs/' + index }));

  constructor(private modalCtrl: ModalController, public imgService: ImageViewService, private alertController: AlertController) { }

  ngOnInit() { }

  ionViewWillEnter() {
    // Passes the array by reference, so any changes made to the array inside of the image viewer service are reflected here in the tc-tour class.
    this.imgService.setImages(this.signArray);
    // console.log(this.signArray);
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
    this.imgService.viewImage(id);
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
