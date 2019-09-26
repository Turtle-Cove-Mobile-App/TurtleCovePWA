import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController } from '@ionic/angular';
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
      class: 'Fish',
      expanded: false,
      species: [
        {
          id: 0,
          checked: false,
          name: 'Alligator Gar',
          nomenclature: 'Atractosteus spatula'
        },
        {
          id: 1,
          checked: false,
          name: 'Bay Anchovy',
          nomenclature: 'Anchovi Anchoa mitchilli'
        },
        {
          id: 2,
          checked: false,
          name: 'Blue Crab',
          nomenclature: 'Callinectes sapidus'
        },
        {
          id: 3,
          checked: false,
          name: 'Bluegill',
          nomenclature: 'Lepomis macrochirus'
        },
        {
          id: 4,
          checked: false,
          name: 'Bowfin',
          nomenclature: 'Amiiformes'
        },
        {
          id: 5,
          checked: false,
          name: 'Brown Shrimp',
          nomenclature: 'Farfantepenaeus aztecus'
        },
        {
          id: 6,
          checked: false,
          name: 'Catfish',
          nomenclature: 'Siluriformes'
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
          name: 'Alligator Snapping Turtle',
          nomenclature: 'Macrochelys temminckii'
        },
        {
          id: 1,
          checked: false,
          name: 'American Bullfrog',
          nomenclature: 'Rana catesbeiana'
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
          name: 'Alligatorweed',
          nomenclature: 'Alternanthera philoxeroides'
        },
        {
          id: 1,
          checked: false,
          name: 'Baldcypress',
          nomenclature: 'Taxodium distichum'
        },
        {
          id: 2,
          checked: false,
          name: 'Bulltongue',
          nomenclature: 'Safittaria lancifolia'
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
          name: 'Anhinga',
          nomenclature: 'Anhinga anhinga'
        },
        {
          id: 1,
          checked: false,
          name: 'Bald Eagle',
          nomenclature: 'Haliaeetus leucocephalus'
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

  constructor(public popoverController: PopoverController, private storage: Storage, private alertController: AlertController) {}

  ngOnInit() {
    this.restoreSpecies();
  }

  restoreSpecies() {
    this.storage.get('speciesArray').then(speciesArray => {
      if (speciesArray) {
        this.species = speciesArray.map(item => {
          return {
            class: item.class,
            expanded: false,
            species: item.species
          };
        });
      }
    });
    console.log('Species restored.');
    console.log(this.species);
  }

  saveSpecies() {
    this.storage.set('speciesArray', this.species);
    console.log('Species saved.');
    console.log(this.species);
  }

  async presentResetAlert() {
    const alert = await this.alertController.create({
      header: 'Reset All',
      message: 'Are you sure you want to reset all of your checkboxes? This cannot be undone!',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => this.resetAll()
        }
      ]
    });

    await alert.present();
  }

  resetAll() {
    for (const speciesClass of this.species) {
      for (const species of speciesClass.species) {
        species.checked = false;
      }
    }
    this.saveSpecies();
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
