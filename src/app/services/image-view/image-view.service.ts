import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageViewService {

  public images: any[];
  public total: number;
  public totalViewed: number;

  constructor() { }

  public setImages(images: any[]) {
    this.images = images;
    this.calcTotal();
    this.calcTotalViewed();
  }

  public calcTotal() {
    this.total = this.images.length;
    return this.total;
  }

  public calcTotalViewed() {
    this.totalViewed = 0;
    for (const image of this.images) {
      if (image.viewed === true) {
        this.totalViewed++;
      }
    }
  }

  public viewImage(id) {
    if (this.images[id].viewed === false) {
      this.images[id].viewed = true;
      this.totalViewed++;
    }
  }

  reset() {
    for (const image of this.images) {
      image.viewed = false;
    }
    this.calcTotalViewed();
  }
}
