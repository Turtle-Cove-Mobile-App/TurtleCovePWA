import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController } from '@ionic/angular';

@Component({
  selector: 'tc-tc-tour',
  templateUrl: './tc-tour.page.html',
  styleUrls: ['./tc-tour.page.scss'],
})
export class TcTourPage implements OnInit {

  public total; // setTotal?
  public found = [];
  public totalFound = 0;

  public primColor = 'primary';

  public signs = [
    {
      id: 0,
      name: '1',
      viewed: false
    },
    {
      id: 1,
      name: '2',
      viewed: false
    },
    {
      id: 2,
      name: '3',
      viewed: false
    },
    {
      id: 3,
      name: '4',
      viewed: false
    },
    {
      id: 4,
      name: '5',
      viewed: false
    },
    {
      id: 5,
      name: '6',
      viewed: false
    },
    {
      id: 6,
      name: '7',
      viewed: false
    },
    {
      id: 7,
      name: '8',
      viewed: false
    },
    {
      id: 8,
      name: '9',
      viewed: false
    },
    {
      id: 9,
      name: '10',
      viewed: false
    },
    {
      id: 10,
      name: '11',
      viewed: false
    },
    {
      id: 11,
      name: '12',
      viewed: false
    }
  ];

  constructor/*(public popoverController: PopoverController, private storage: Storage, private alertController: AlertController)*/() {}

  public getColor(viewed): string {
    if (viewed) {
      return 'medium';
    } else {
      return 'primary';
    }
  }
  public signViewed(obj): void {
    if (obj.viewed === false) {
      obj.viewed = true;
      this.totalFound++;
    }
  }

  public reset(): void {

    for (const o of this.signs) {
        o.viewed = false;
    }
    this.primColor = 'primary';
    this.totalFound = 0;
  }

  ngOnInit() {
    this.total = this.signs.length;
  }

}
