import { ImageViewService } from 'src/app/services/image-view/image-view.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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
  constructor(private modalCtrl: ModalController, public imgService: ImageViewService) {}

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

  public getColor(viewed): string {
    if (viewed) {
      return 'medium';
    } else {
      return 'primary';
    }
  }

}
