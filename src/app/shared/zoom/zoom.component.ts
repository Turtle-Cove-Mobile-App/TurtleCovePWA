import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'tc-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.scss']
})
export class ZoomComponent implements OnInit {
  initIndex: number;
  total: number;
  paths: string[] = [];

  sliderOptions;

  zoomedIn = false;

  @ViewChild('slider', { read: ElementRef, static: true }) slider: ElementRef;

  constructor(
    private navParams: NavParams,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.initIndex = this.navParams.get('index');
    this.total = this.navParams.get('total');
    for (let i = 0; i < this.total; i++) {
      this.paths.push('assets/img/signs/' + i);
    }

    this.sliderOptions = {
      initialSlide: this.initIndex,
      zoom: {
        maxRatio: 3
      }
    }
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
