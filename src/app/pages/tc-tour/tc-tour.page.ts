import { Storage } from '@ionic/storage';
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

  private totalNumberOfSigns = 55;

  private imagesLoaded = 0;
  public loading;

  private signArray;

  constructor(private modalCtrl: ModalController, public imgService: ImageViewService, private alertController: AlertController, private storage: Storage) { }

  ngOnInit() {
    this.loading = true;
    this.storage.get('signs').then(signs => {
      if (signs) {
        this.signArray = signs;
      }
      else {
        this.signArray = new Array(this.totalNumberOfSigns).fill({ viewed: false }).map((item, index) => ({ viewed: item.viewed, path: 'assets/img/signs/' + index + '.jpg' }));
        this.storage.set('signs', this.signArray);
      }
    }).then(() => {
      this.imgService.setImages(this.signArray);
    });
  }

  ionViewWillEnter() {
    // Passes the array by reference, so any changes made to the array inside of the image viewer service are reflected here in the tc-tour class.
    this.imgService.setImages(this.signArray);
    // console.log(this.signArray);
  }

  imgLoaded() {
    if (++this.imagesLoaded === this.totalNumberOfSigns) {
      this.loading = false;
    }
  }

  async showZoom(id) {
    const modal = await this.modalCtrl.create({
      component: ZoomComponent,
      cssClass: 'transparent-modal',
      componentProps: {
        index: id
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
