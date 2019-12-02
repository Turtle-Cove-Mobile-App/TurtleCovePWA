import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

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

}
