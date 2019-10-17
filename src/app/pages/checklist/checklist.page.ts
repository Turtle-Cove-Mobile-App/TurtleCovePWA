import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController } from '@ionic/angular';
import { PopoverComponent } from './popover/popover.component';
import { Storage } from '@ionic/storage';
import { Species } from './species';
import { AnimalClass } from './animal-class';

@Component({
  selector: 'tc-checklist',
  templateUrl: './checklist.page.html',
  styleUrls: ['./checklist.page.scss']
})
export class ChecklistPage implements OnInit {
  public alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

  public anyExpanded = false;

  public total = 0;
  public found = [];
  public totalFound = 0;

  public species = [
    new AnimalClass('Fish', [
      new Species(0, 'Alligator Gar', 'Atractosteus spatula'),
      new Species(1, 'Bay Anchovy', 'Anchovi Anchoa mitchilli'),
      new Species(2, 'Blue Crab', 'Callinectes sapidus'),
      new Species(3, 'Bluegill', 'Lepomis macrochirus'),
      new Species(4, 'Bowfin', 'Amiiformes'),
      new Species(5, 'Brown Shrimp', 'Farfantepenaeus aztecus'),
      new Species(6, 'Catfish', 'Siluriformes')
    ]),
    new AnimalClass('Reptiles and Amphibians', [
      new Species(0, 'Alligator Snapping Turtle', 'Macrochelys temminckii'),
      new Species(1, 'American Bullfrog', 'Rana catesbeiana')
    ]),
    new AnimalClass('Plants', [
      new Species(0, 'Alligatorweed', 'Alternanthera philoxeroides'),
      new Species(1, 'Baldcypress', 'Taxodium distichum'),
      new Species(2, 'Bulltongue', 'Safittaria lancifolia')
    ]),
    new AnimalClass('Birds', [
      new Species(0, 'Anhinga', 'Anhinga anhinga'),
      new Species(1, 'Bald Eagle', 'Haliaeetus leucocephalus')
    ]),
    new AnimalClass('Mammals', [
      new Species(0, 'Pao', 'Asian'),
      new Species(1, 'Red Head Canadian', 'CANADIAN'),
      new Species(2, 'McDowell', 'Zoiks!'),
      new Species(3, 'G-Doc', 'Projects')
    ])
  ];

  constructor(
    public popoverController: PopoverController,
    private storage: Storage,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.restore();
    // tslint:disable-next-line: forin
    for (const i in this.species) {
      this.found[i] = 0;
      this.total += this.species[i].species.length;
    }
  }

  checkChanged() {
    this.found = [];
    // tslint:disable-next-line: forin
    for (const i in this.species) {
      this.found[i] = 0;
      for (const species of this.species[i].species) {
        if (species.checked) {
          this.found[i]++;
        }
      }
    }
    this.totalFound = this.found.reduce((a, b) => a + b);
    this.save();
  }

  restore() {
    this.storage.get('speciesArray').then(speciesArray => {
      if (speciesArray) {
        this.species = speciesArray.map(item => {
          item.expanded = false;
          return item;
        });
      }
    });
    this.storage
      .get('speciesFound')
      .then(speciesFound => {
        if (speciesFound) {
          this.found = speciesFound;
        }
      })
      .then(() => (this.totalFound = this.found.reduce((a, b) => a + b)));
    console.log('Species restored.');
    console.log(this.species);
  }

  save() {
    this.storage.set('speciesArray', this.species);
    this.storage.set('speciesFound', this.found);
    console.log('Species saved.');
    console.log(this.species);
  }

  async presentResetAlert() {
    const alert = await this.alertController.create({
      header: 'Reset All',
      message:
        'Are you sure you want to reset all of your checkboxes? This cannot be undone!',
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
    // tslint:disable-next-line: forin
    for (const i in this.species) {
      this.found[i] = 0;
      for (const species of this.species[i].species) {
        species.checked = false;
      }
    }
    this.totalFound = 0;
    this.save();
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
