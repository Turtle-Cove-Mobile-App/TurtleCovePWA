import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GwStopComponent } from './gw-stop/gw-stop.component';
import { PluginsService } from '../../../services/plugins-service/plugins.service';


@Component({
  selector: 'tc-gw-stops',
  templateUrl: './gw-stops.page.html',
  styleUrls: ['./gw-stops.page.scss'],
})
export class GwStopsPage implements OnInit {

  public stops = [
    {
      title: 'Scooby Doo',
      info: `Somebody once told me the world is gonna roll me I ain't the sharpest tool
      in the shed She was looking kind of dumb with her finger and her thumb In
      the shape of an "L" on her forehead...`,
      img: 'assets/img/stops/0.jpg',
      coords: [0, 0, 0]
    },
    {
      title: 'Center of a Volcano',
      info: `Somebody once told me the world is gonna roll me I ain't the sharpest tool
      in the shed She was looking kind of dumb with her finger and her thumb In
      the shape of an "L" on her forehead...`,
      img: 'assets/img/stops/1.jpg',
      coords: [0, 0, 0]
    },
    {
      title: 'Ghassan Home',
      info: `Somebody once told me the world is gonna roll me I ain't the sharpest tool
      in the shed She was looking kind of dumb with her finger and her thumb In
      the shape of an "L" on her forehead...`,
      img: 'assets/img/stops/2.jpg',
      coords: [0, 0, 0]
    },
    {
      title: 'Canada',
      info: `Somebody once told me the world is gonna roll me I ain't the sharpest tool
      in the shed She was looking kind of dumb with her finger and her thumb In
      the shape of an "L" on her forehead...`,
      img: 'assets/img/stops/3.jpg',
      coords: [0, 0, 0]
    }
  ];

  constructor(private modalCtrl: ModalController, public plugins: PluginsService) { }

  ngOnInit() {

  }

  async showModal(stop) {
    const modal = await this.modalCtrl.create({
      component: GwStopComponent,
      cssClass: 'transparent-modal',
      componentProps: {
        item: stop
      }
    });
    await modal.present();
  }

}
