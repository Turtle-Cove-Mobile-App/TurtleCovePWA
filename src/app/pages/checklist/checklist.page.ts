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

  public allExpanded = false;

  public species = [
    {
      class: 'Fish/Macroinvertebrate',
      expanded: false,
      species: [
        {
          id: 0,
          name: 'One Fish',
          nomenclature: 'OneFishfancyName'
        },
        {
          id: 1,
          name: 'O2 Fish',
          nomenclature: 'O2FishfancyName'
        },
        {
          id: 2,
          name: 'O3 Fish',
          nomenclature: 'O3FishfancyName'
        },
        {
          id: 3,
          name: 'Two Fish',
          nomenclature: 'TwoFishfancyName'
        },
        {
          id: 4,
          name: 'Red Fish',
          nomenclature: 'RedFishfancyName'
        },
        {
          id: 5,
          name: 'Blue Fish',
          nomenclature: 'BlueFishfancyName'
        }
      ]
    },
    {
      class: 'Reptiles',
      expanded: false,
      species: [
        {
          id: 0,
          name: 'Snek',
          nomenclature: 'SnekfancyName'
        },
        {
          id: 1,
          name: 'Lizard Person',
          nomenclature: 'LizardPersonfancyName'
        }
      ]
    },
    {
      class: 'Plants',
      expanded: false,
      species: [
        {
          id: 0,
          name: 'Grass',
          nomenclature: 'GrassFancyName'
        },
        {
          id: 1,
          name: 'Happy Little Tree',
          nomenclature: 'HLTFancyName'
        },
        {
          id: 2,
          name: 'Flower',
          nomenclature: 'FlowerFancyName'
        }
      ]
    },
    {
      class: 'Birds',
      expanded: false,
      species: [
        {
          id: 0,
          name: 'Screeching Owl',
          nomenclature: 'SOFancyName'
        },
        {
          id: 1,
          name: 'Bald Eagle',
          nomenclature: 'BEFancyName'
        }
      ]
    },
    {
      class: 'Mammals',
      expanded: false,
      species: [
        {
          id: 0,
          name: 'Pao',
          nomenclature: 'Asian'
        },
        {
          id: 1,
          name: 'Red Head Canadian',
          nomenclature: 'CANADIAN'
        },
        {
          id: 2,
          name: 'McDowell',
          nomenclature: 'Zoiks!'
        },
        {
          id: 3,
          name: 'G-Doc',
          nomenclature: 'Projects'
        }
      ]
    }
  ];

  constructor(public popoverController: PopoverController) {}

  ngOnInit() {}

  toggleClass(animalClass) {
    animalClass.expanded = !animalClass.expanded;
  }

  async openSpeciesInfo(species, speciesClass) {
    console.log(species);
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: {
        species,
        speciesClass
      },
      translucent: true
    });
    return await popover.present();
  }

  getSpeciesNames(obj) {
    return obj.map(item => item.name);
  }

  toggleAllExpanded() {
    this.allExpanded = !this.allExpanded;
    this.species.forEach(speciesClass => {
      speciesClass.expanded = this.allExpanded;
    });
  }
}
