import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'tc-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {
  public species;
  public speciesClass: string;

  constructor(
    private navParams: NavParams,
    private popoverController: PopoverController
  ) {}

  ngOnInit() {
    this.species = this.navParams.get('species');
    this.speciesClass = this.navParams.get('speciesClass');
    this.species.image = 'assets/img/species/' + this.speciesClass.toLowerCase() + '/' + this.species.id;
  }

  public dismiss(): void {
    this.popoverController.dismiss();
  }
}
