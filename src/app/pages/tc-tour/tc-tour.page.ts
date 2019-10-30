import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';
import { ZoomComponent } from 'src/app/shared/zoom/zoom.component';


@Component({
  selector: 'tc-tc-tour',
  templateUrl: './tc-tour.page.html',
  styleUrls: ['./tc-tour.page.scss'],
})
export class TcTourPage implements OnInit {

  // public total;
  public total = 15;
  public totalArray;
  public found = [];
  public totalFound = 0;
  public primColor = 'primary';
  public signs = [
    {
      id: 0,
      viewed: false,
      title: 'Double-crested Cormorant',
      info: [`The double-crested cormorant (Phalacrocorax auritus) is a member of the
      cormorant family of seabirds. Its habitat is near rivers and lakes as
      well as in coastal areas, and is widely distributed across North America,
      from the Aleutian Islands in Alaska down to Florida and Mexico. Measuring
      70–90 cm (28–35 in) in length, it is an all-black bird which gains a small
      double crest of black and white feathers in breeding season. It has a bare
      patch of orange-yellow facial skin. Five subspecies are recognized. It
      mainly eats fish and hunts by swimming and diving. Its feathers, like those
      of all cormorants, are not waterproof and it must spend time drying them out
      after spending time in the water. Once threatened by the use of DDT, the numbers
      of this bird have increased markedly in recent years.`],
      citation: [`  (2019, October 2). Double-crested cormorant.
       In Wikipedia, The Free Encyclopedia. Retrieved 18:07, October 24, 2019, from
        https://en.wikipedia.org/w/index.php?title=Double-crested_cormorant&oldid=919153139`]
    },
    {
      id: 1,
      viewed: false,
      title: 'Gulf Menhaden and Bay Anchovy',
      info: [`The Gulf menhaden (Brevoortia patronus) is a small
      marine filter-feeding fish belonging to the family Clupeidae.
      The range of Gulf menhaden encompasses the entirety of the Gulf
      of Mexico nearshore waters, with the exception of the extreme
      eastern Yucatan and western Cuba. Evidence from morphology and
      DNA analyses suggest that the Gulf menhaden is the Gulf of
      Mexico complement to the Atlantic menhaden (Brevoortia tyrannus).
      Both species support large commercial reduction fisheries, with
      Gulf menhaden supporting the second largest fishery, by weight,
      in the United States.`,
      `The bay anchovy
      is somewhat variable in appearance. It is a small, slender,
      schooling fish with a greenish body and a silvery stripe. It
      is characterized by its very long jaw, silvery belly, lateral
      stripe, and single dorsal fin. The dorsal fin is located
      directly above the anal fin origin. The adult male is generally
      about 6 centimeters long, with a maximum length of 10 to 11
      centimeters. It has 14 to 16 rays in its dorsal fin, 24 to 30
      in its anal fin, and 11 to 12 in the pectoral. It may live more
      than three years. The bay anchovy is similar to other species in the
      genus Anchoa which occur in the same regions. The broad-striped anchovy
      is similar in appearance but grows to a larger size, up to 15
      centimeters. The Cuban anchovy has its anal fin set farther back on
      the body.`],
      citation: [`(2019, July 6). Gulf menhaden. In Wikipedia, The Free
       Encyclopedia. Retrieved 16:55, October 24, 2019, from
       https://en.wikipedia.org/w/index.php?title=Gulf_menhaden&oldid=905079852`,
      `(2018, August 30). Anchoa mitchilli. In Wikipedia, The Free Encyclopedia. Retrieved
       17:51, October 24, 2019, from
       https://en.wikipedia.org/w/index.php?title=Anchoa_mitchilli&oldid=857298695`]
    },
    {
      id: 2,
      viewed: false,
      title: 'Nope',
    },
    {
      id: 3,
      viewed: false,
      title: 'Nope',
    },
    {
      id: 4,
      viewed: false,
      title: 'Nope',
    },
    {
      id: 5,
      viewed: false
    },
    {
      id: 6,
      viewed: false
    },
    {
      id: 7,
      viewed: false
    },
    {
      id: 8,
      viewed: false
    },
    {
      id: 9,
      viewed: false
    },
    {
      id: 10,
      viewed: false
    },
    {
      id: 11,
      viewed: false
    }
  ];

  // constructor(public popoverController: PopoverController, private storage: Storage, private alertController: AlertController) {}
  constructor(private modelCtrl: ModalController) {}

  ngOnInit() {
    // this.total = this.signs.length;
    this.totalArray = new Array(this.total).fill({viewed: false}).map(item => ({viewed: item.viewed}));
  }

  async showModal(obj) {
    const modal = await this.modelCtrl.create({
      component: ModalComponent,
      componentProps: {
        obj
      }
    });
    await modal.present();
    this.signViewed(obj);
  }

  async showZoom(id) {
    const modal = await this.modelCtrl.create({
      component: ZoomComponent,
      componentProps: {
        id
      }
    });
    await modal.present();
    this.signZoomViewed(id);
  }

  public signZoomViewed(id): void {
    if (this.totalArray[id].viewed === false) {
      this.totalArray[id].viewed = true;
      this.totalFound++;
    }
  }

  newReset() {
    for (const sign of this.totalArray) {
      sign.viewed = false;
    }
    this.totalFound = 0;
  }

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

}
