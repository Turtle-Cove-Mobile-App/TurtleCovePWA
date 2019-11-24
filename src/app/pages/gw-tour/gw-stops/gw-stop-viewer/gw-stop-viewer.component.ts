import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'tc-gw-stop-viewer',
  templateUrl: './gw-stop-viewer.component.html',
  styleUrls: ['./gw-stop-viewer.component.scss'],
})
export class GwStopViewerComponent implements OnInit {

  sliderOptions;
  private initIndex: number;

  @ViewChild('slider', { read: ElementRef, static: true }) slider: ElementRef;

  constructor(private modalController: ModalController, private navParams: NavParams) { }

  ngOnInit() {
    this.initIndex = this.navParams.get('index');

    this.sliderOptions = {
      initialSlide: this.initIndex,
    };
  }

  slideChanged() {
    // Change this from images to 'stops'
    // this.slider.nativeElement.getActiveIndex().then(index => this.imgService.viewImage(index));
  }

  close() {
    this.modalController.dismiss();
  }

}
