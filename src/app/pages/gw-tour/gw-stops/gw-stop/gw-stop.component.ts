import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { StoragePlugin } from '@capacitor/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'tc-gw-stop',
  templateUrl: './gw-stop.component.html',
  styleUrls: ['./gw-stop.component.scss'],
})
export class GwStopComponent implements OnInit {


  constructor(private modalCtrl: ModalController, private navParams: NavParams, public toastController: ToastController) { }

  public stop;
  public address;
  private isToastOpen = false;
  public online = window.navigator.onLine;

ngOnInit() {
  this.stop = this.navParams.get('item');
  if (this.stop.title === 'Joyce Boardwalk') {
    // tslint:disable-next-line: max-line-length
    this.address = 'https://www.google.com/maps/place/Joyce+Wildlife+Swampwalk/@30.3869986,-90.4249505,14.94z/data=!4m8!1m2!2m1!1sJoyce+Boardwalk!3m4!1s0x86273b18fcdc791b:0xdacf8fff07d5c2a7!8m2!3d30.3969561!4d-90.429189';
  } else if (this.stop.title === 'North Pass Public Boat Launch') {
    // tslint:disable-next-line: max-line-length
    this.address = 'https://www.google.com/maps/place/Boat+Ramp+(manchac)/@30.3074174,-90.4135621,15z/data=!4m8!1m2!2m1!1sNorth+Pass+Public+Boat+Launch+Maurepas!3m4!1s0x862730fa700b695d:0x695a481e15c128f1!8m2!3d30.3076889!4d-90.4060543';
  } else if (this.stop.title === `Middendorf's Seafood Restaurant`) {
    // tslint:disable-next-line: max-line-length
    this.address = `https://www.google.com/maps/place/Middendorf's+Manchac/@30.289542,-90.401475,17z/data=!4m12!1m6!3m5!1s0x8627311b6cdace1f:0x58b7c213923ad84f!2sMiddendorf's+Manchac!8m2!3d30.289542!4d-90.401475!3m4!1s0x8627311b6cdace1f:0x58b7c213923ad84f!8m2!3d30.289542!4d-90.401475`;
  } else if (this.stop.title === `Shell Bank Bayou`) {
    // tslint:disable-next-line: max-line-length
    this.address = 'https://www.google.com/maps/place/Shell+Bank+Bayou/@30.2120762,-90.5157202,11.82z/data=!4m5!3m4!1s0x86272d6b29237a9b:0xd58e7cad316c2c13!8m2!3d30.1843654!4d-90.4686968';
  } else if (this.stop.title === 'Turtle Cove Environmental Research Station Boatshed and Classroom on Galva Canal') {
    // tslint:disable-next-line: max-line-length
    this.address = 'https://www.google.com/maps/place/Turtle+Cove+Environmental+Research+Station/@30.2771132,-90.3995788,17z/data=!3m1!4b1!4m5!3m4!1s0x8627311466ef6397:0x7c318c63a034f6c1!8m2!3d30.2771132!4d-90.3973901';
  } else if (this.stop.title === 'LDWF Maurepas Swamp Nature Trail') {
    // tslint:disable-next-line: max-line-length
    this.address = 'https://www.google.com/maps/place/Maurepas+Swamp+Wildlife+Management+Area+Nature+Trail/@30.146354,-90.5863716,12z/data=!4m8!1m2!2m1!1sMaurepas+Swamp+nature+trail!3m4!1s0x8620cd78595c6e11:0x72669e2eeeedc5bf!8m2!3d30.1138676!4d-90.4428914';
  } else if (this.stop.title === `Frenier’s Landing Restaurant and Oyster Bar`) {
    // tslint:disable-next-line: max-line-length
    this.address = `https://www.google.com/maps/place/Frenier+Landing/@30.1211098,-90.434227,13.12z/data=!4m5!3m4!1s0x8620d2283b99a2bb:0xd0f7905f2c3284d5!8m2!3d30.1068348!4d-90.4225655`;
  }
}

async presentToastWithOptions() {
  console.log(this.isToastOpen);
  if (!this.isToastOpen) {
    const toast = await this.toastController.create({
      header: 'Failed to load...',
      message: 'This feature requires an internet connection',
      color: 'dark',
      position: 'bottom',
      buttons: [
        {
          text: 'Close',
          handler: () => {
            console.log('Cancel clicked');
            this.isToastOpen = false;
          }
        }
      ]
    });
    toast.present().then(() => this.isToastOpen = true);
  }
}

dismiss() {
  this.modalCtrl.dismiss();
}

buttonHandler() {
  if (this.online) {
    window.open(this.address, '_blank');
  } else {
    this.presentToastWithOptions();
  }
}

}
