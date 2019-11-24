import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GwStopComponent } from './gw-stop/gw-stop.component';

@Component({
  selector: 'tc-gw-stops',
  templateUrl: './gw-stops.page.html',
  styleUrls: ['./gw-stops.page.scss'],
})
export class GwStopsPage implements OnInit {

  public stops = [
    {
      title: 'first stop',
      info: 'sample poop',
      img: 'path'
    },
    {
      title: 'second stop',
      info: 'more poop',
      img: 'popeyes'
    }
  ];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {

  }

  async showModal(stop) {
    // fix this
    const modal = await this.modalCtrl.create({
      component: GwStopComponent,
      componentProps: {
        stops: this.stops
      }
    });
    await modal.present();
  }

}
