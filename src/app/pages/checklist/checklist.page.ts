import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from './popover/popover.component';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'tc-checklist',
  templateUrl: './checklist.page.html',
  styleUrls: ['./checklist.page.scss']
})
export class ChecklistPage implements OnInit {
  public alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

  public anyExpanded = false;

  public species = [
    {
      class: 'Fish/Macroinvertebrate',
      expanded: false,
      species: [
        {
          id: 0,
          checked: false,
          name: 'One Fish',
          nomenclature: 'OneFishfancyName'
        },
        {
          id: 1,
          checked: false,
          name: 'O2 Fish',
          nomenclature: 'O2FishfancyName'
        },
        {
          id: 2,
          checked: false,
          name: 'O3 Fish',
          nomenclature: 'O3FishfancyName'
        },
        {
          id: 3,
          checked: false,
          name: 'Two Fish',
          nomenclature: 'TwoFishfancyName'
        },
        {
          id: 4,
          checked: false,
          name: 'Red Fish',
          nomenclature: 'RedFishfancyName'
        },
        {
          id: 5,
          checked: false,
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
          checked: false,
          name: 'Snek',
          nomenclature: 'SnekfancyName'
        },
        {
          id: 1,
          checked: false,
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
          checked: false,
          name: 'Grass',
          nomenclature: 'GrassFancyName'
        },
        {
          id: 1,
          checked: false,
          name: 'Happy Little Tree',
          nomenclature: 'HLTFancyName'
        },
        {
          id: 2,
          checked: false,
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
          checked: false,
          name: 'Screeching Owl',
          nomenclature: 'SOFancyName'
        },
        {
          id: 1,
          checked: false,
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
          checked: false,
          name: 'Pao',
          nomenclature: 'Asian'
        },
        {
          id: 1,
          checked: false,
          name: 'Red Head Canadian',
          nomenclature: 'CANADIAN'
        },
        {
          id: 2,
          checked: false,
          name: 'McDowell',
          nomenclature: 'Zoiks!'
        },
        {
          id: 3,
          checked: false,
          name: 'G-Doc',
          nomenclature: 'Projects'
        }
      ]
    }
  ];

  constructor(public popoverController: PopoverController, private storage: Storage) {}

  ngOnInit() {
    this.restoreSpecies();
  }

  restoreSpecies() {
    this.storage.get('speciesArray').then(speciesArray => {
      this.species = speciesArray.map(item => {
        return {
          class: item.class,
          expanded: false,
          species: item.species
        };
      });
    });
    console.log('Species restored.');
    console.log(this.species);
  }

  saveSpecies() {
    this.storage.set('speciesArray', this.species);
    console.log('Species saved.');
    console.log(this.species);
  }

  toggleClass(speciesClass) {
    speciesClass.expanded = !speciesClass.expanded;
    for (const obj of this.species) {
      if (obj.expanded === true) {
        this.anyExpanded = true;
        break;
      }
      this.anyExpanded = false;
    }
  }

  toggleExpandAll() {
    for (const speciesClass of this.species) {
      speciesClass.expanded = !this.anyExpanded;
    }
    this.anyExpanded = !this.anyExpanded;
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
}
