import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tc-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  public historyExpanded = false;
  public whatGoesOnExpanded = false;

  constructor() { }

  toggleHistory() {
    if (this.historyExpanded === false) {
      this.historyExpanded = true;
    } else {
      this.historyExpanded = false;
    }
  }

  toggleWhatGoesOn() {
    if (this.whatGoesOnExpanded === false) {
      this.whatGoesOnExpanded = true;
    } else {
      this.whatGoesOnExpanded = false;
    }
  }

  ngOnInit() {
  }

}
