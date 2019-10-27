import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'tc-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.scss'],
})
export class ZoomComponent implements OnInit {

  image: any;

  sliderOptions = {
    zoom: {
      maxRatio: 3
    }
  };

  constructor(private navParams: NavParams, private modalController: ModalController) { }

  ngOnInit() {
    this.image = this.navParams.get('img');
  }

  zoom(zoomIn: boolean) {

  }

  close() {
    this.modalController.dismiss();
  }

}
