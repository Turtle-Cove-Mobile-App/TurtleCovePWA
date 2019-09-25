import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'tc-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  public species;

  constructor(private navParams: NavParams) { }

  ngOnInit() {
    this.species = this.navParams.get('species');
    console.log(this.species);
  }

}
