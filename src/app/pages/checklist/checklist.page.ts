import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from './popover/popover.component';

@Component({
  selector: 'tc-checklist',
  templateUrl: './checklist.page.html',
  styleUrls: ['./checklist.page.scss']
})
export class ChecklistPage implements OnInit {
  // In Angular... for class in species, create header section with name of class.
  // for species of species[class], display species

  public alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

  public species = [
    {
      class: 'Fish/Macroinvertebrate',
      expanded: false,
      species: [
        {
          name: 'One Fish',
          nomenclature: 'OneFishfancyName',
          image: 'image string',
        },
        {
          name: 'O2 Fish',
          nomenclature: 'O2FishfancyName',
          image: 'image string'
         },
        {
          name: 'O3 Fish',
          nomenclature: 'O3FishfancyName',
          image: 'image string'
        },
        {
          name: 'Two Fish',
          nomenclature: 'TwoFishfancyName',
          image: 'image string'
        },
        {
          name: 'Red Fish',
          nomenclature: 'RedFishfancyName',
          image: 'image string'
        },
        {
          name: 'Blue Fish',
          nomenclature: 'BlueFishfancyName',
          image: 'image string'
        }
      ]
    },
    {
      class: 'Reptiles',
      expanded: false,
      species: [
        {
          name: 'Snek',
          nomenclature: 'SnekfancyName',
          image: 'assets/img/snek.png'
        },
        {
          name: 'Lizard Person',
          nomenclature: 'LizardPersonfancyName',
          image: 'image string'
        }
      ]
    },
    {
      class: 'Plants',
      expanded: false,
      species: [
        {
          name: 'Grass',
          nomenclature: 'GrassFancyName',
          image: 'assets/img/snek.png'
        },
        {
          name: 'Happy Little Tree',
          nomenclature: 'HLTFancyName',
          image: 'assets/img/snek.png'
        },
        {
          name: 'Flower',
          nomenclature: 'FlowerFancyName',
          image: 'assets/img/snek.png'
        }
      ]
    },
    {
      class: 'Birds',
      expanded: false,
      species: [
        {
          name: 'Screeching Owl',
          nomenclature: 'SOFancyName',
          image: 'assets/img/snek.png'
         },
         {
           name: 'Bald Eagle',
           nomenclature: 'BEFancyName',
           image: 'assets/img/snek.png'
        }
      ]
    },
    {
      class: 'Mammals',
      expanded: false,
      species: [
        {
          name: 'Pao',
          nomenclature: 'Asian',
          image: 'assets/img/snek.png'
        },
        {
          name: 'Red Head Canadian',
          nomenclature: 'CANADIAN',
          image: 'assets/img/snek.png'
        },
        {
          name: 'McDowell',
          nomenclature: 'Zoiks!',
          image: 'assets/img/snek.png'
        },
        {
          name: 'G-Doc',
          nomenclature: 'Projects',
          image: 'assets/img/snek.png'
        },
        {
          name: 'Zac',
          nomenclature: 'loser',
          image: 'assets/img/snek.png'
        }
      ]
    }
  ];

  constructor(public popoverController: PopoverController) {}

  ngOnInit() {}

  toggleClass(animalClass) {
    animalClass.expanded = !animalClass.expanded;
  }

  async openSpeciesInfo(i,j) {
    // i is object index.
    // j is species index.
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      translucent: true
    });
    return await popover.present();
  }

  getSpeciesNames(obj) {
    return obj.map(item => item.name);
  }
}
