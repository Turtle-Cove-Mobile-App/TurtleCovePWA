import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { StoragePlugin } from '@capacitor/core';

@Component({
  selector: 'tc-gw-stop',
  templateUrl: './gw-stop.component.html',
  styleUrls: ['./gw-stop.component.scss'],
})
export class GwStopComponent implements OnInit {


  constructor(private modalCtrl: ModalController, private navParams: NavParams) { }

  public stop;

  ngOnInit() {
    this.stop = this.navParams.get('item');
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  routeToStop() {
    const lat = this.stop.coords[0];
    const lon = this.stop.coords[1];
    //route google maps to this stop's position
  }


}
