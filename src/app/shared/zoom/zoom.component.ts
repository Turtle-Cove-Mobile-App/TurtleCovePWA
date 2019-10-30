import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'tc-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.scss']
})
export class ZoomComponent implements OnInit {
  image: any;
  imgId: any;

  zoomedIn = false;

  @ViewChild('slider', { read: ElementRef, static: true }) slider: ElementRef;

  sliderOptions = {
    zoom: {
      maxRatio: 3
    }
  };

  constructor(
    private navParams: NavParams,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.image = this.navParams.get('img');
    this.imgId = this.navParams.get('id');
    console.log(this.slider);
  }

  zoom(zoomIn: boolean) {
    if (zoomIn === !this.zoomedIn) {
      const zoom = this.slider.nativeElement.swiper.zoom;
      if (zoomIn) {
        zoom.in();
      } else {
        zoom.out();
      }
      this.zoomedIn = zoomIn;
    }
  }

  close() {
    this.modalController.dismiss();
  }
}
