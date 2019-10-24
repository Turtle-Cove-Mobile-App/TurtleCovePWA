import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tc-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  public expanded = false;

  constructor() { }

  toggleExpanded() {
    if (this.expanded === false) {
      this.expanded = true;
    } else {
      this.expanded = false;
    }
  }

  ngOnInit() {
  }

}
