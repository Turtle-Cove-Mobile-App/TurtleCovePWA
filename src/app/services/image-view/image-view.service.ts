import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageViewService {

  public signs: any[];
  public total: number = 15;
  public totalViewed: number;

  constructor() { }

  public setSigns(signs: any[]) {
    this.signs = signs;
    this.calcTotal();
    this.calcTotalViewed();
  }

  public calcTotal() {
    this.total = this.signs.length;
    return this.total;
  }

  public calcTotalViewed() {
    this.totalViewed = 0;
    for (const sign of this.signs) {
      if (sign.viewed === true) {
        this.totalViewed++;
      }
    }
  }

  public viewSign(id): void {
    if (this.signs[id].viewed === false) {
      this.signs[id].viewed = true;
      this.totalViewed++;
    }
  }

  reset() {
    for (const sign of this.signs) {
      sign.viewed = false;
    }
    this.calcTotalViewed();
  }
}
