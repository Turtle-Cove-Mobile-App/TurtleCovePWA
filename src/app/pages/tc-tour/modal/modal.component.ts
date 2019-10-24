import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'tc-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  constructor(private modalCtrl: ModalController, private navParams: NavParams) { }

  public sign;

  ngOnInit() {
    this.sign = this.navParams.get('obj');
    this.sign.image = 'assets/img/signs/' + this.sign.id;
    console.log(this.sign.image);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
