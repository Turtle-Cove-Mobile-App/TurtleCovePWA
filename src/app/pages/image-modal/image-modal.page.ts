import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'tc-image-model',
  templateUrl: './image-modal.page.html',
  styleUrls: ['./image-modal.page.scss'],
})
export class ImageModalPage implements OnInit {

  image: any;

  sliderOptions = {
    zoom: {
      maxRatio: 3
    }
  };

  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {
    this.image = this.navParams.get('image');
  }

  zoom(zoomIn: boolean) {

  }

  close() {
    this.modalController.dismiss();
  }

}
