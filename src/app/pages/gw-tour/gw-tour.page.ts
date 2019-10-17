import { PluginsService } from './../../services/plugins/plugins.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tc-gw-tour',
  templateUrl: './gw-tour.page.html',
  styleUrls: ['./gw-tour.page.scss'],
})
export class GwTourPage implements OnInit {

  constructor(public plugins: PluginsService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.plugins.subscribeLocation();
  }

  ionViewDidLeave() {
    this.plugins.unsubscribeLocation();
  }

  logLocation() {
    console.log(this.plugins.location);
  }

}
