import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'tc-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  public species;
  public speciesClass: string;

  constructor(
    private navParams: NavParams,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.species = this.navParams.get('species');
    this.speciesClass = this.navParams.get('speciesClass');
    this.species.image = 'assets/img/species/' + this.speciesClass.toLowerCase() + '/' + this.species.id;
  }

  public dismiss(): void {
    this.modalCtrl.dismiss();
  }
}
