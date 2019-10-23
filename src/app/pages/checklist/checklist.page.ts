import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController } from '@ionic/angular';
import { PopoverComponent } from './popover/popover.component';
import { Storage } from '@ionic/storage';
import { Species } from './species';
import { SpeciesClass } from './species-class';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'tc-checklist',
  templateUrl: './checklist.page.html',
  styleUrls: ['./checklist.page.scss']
})
export class ChecklistPage implements OnInit {
  public alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

  public anyExpanded = false;

  public total = 0;
  public totalFound = 0;

  public speciesClass = [
    new SpeciesClass('Fish', [
      new Species(0, 'Alligator Gar', 'Atractosteus spatula'),
      new Species(1, 'Bay Anchovy', 'Anchovi Anchoa mitchilli'),
      new Species(2, 'Blue Crab', 'Callinectes sapidus'),
      new Species(3, 'Bluegill', 'Lepomis macrochirus'),
      new Species(4, 'Bowfin', 'Amiiformes'),
      new Species(5, 'Brown Shrimp', 'Farfantepenaeus aztecus'),
      new Species(6, 'Catfish', 'Siluriformes')
    ]),
    new SpeciesClass('Reptiles and Amphibians', [
      new Species(0, 'Alligator Snapping Turtle', 'Macrochelys temminckii'),
      new Species(1, 'American Bullfrog', 'Rana catesbeiana')
    ]),
    new SpeciesClass('Plants', [
      new Species(0, 'Alligatorweed', 'Alternanthera philoxeroides'),
      new Species(1, 'Baldcypress', 'Taxodium distichum'),
      new Species(2, 'Bulltongue', 'Safittaria lancifolia')
    ]),
    new SpeciesClass('Birds', [
      new Species(0, 'Anhinga', 'Anhinga anhinga'),
      new Species(1, 'Bald Eagle', 'Haliaeetus leucocephalus')
    ]),
    new SpeciesClass('Mammals', [])
  ];

  constructor(
    public popoverController: PopoverController,
    private storage: Storage,
    private alertController: AlertController
  ) {
    if (!environment.production) {
      this.speciesClass[this.speciesClass.length - 1].species.push(
        ...[
          new Species(0, 'Pao', 'Asian'),
          new Species(1, 'Red Head Canadian', 'CANADIAN'),
          new Species(2, 'McDowell', 'Zoiks!'),
          new Species(3, 'G-Doc', 'Projects')
        ]
      );
    }
  }

  ngOnInit() {
    for (const obj of this.speciesClass) {
      obj.species = obj.species.sort((a, b) => (a.id > b.id) ? -1 : 1);
    }
    this.restore();
    // tslint:disable-next-line: forin
    for (const obj of this.speciesClass) {
      obj.found = 0;
      this.total += obj.species.length;
    }
  }

  checkChanged() {
    this.totalFound = 0;
    // tslint:disable-next-line: forin
    for (const speciesClass of this.speciesClass) {
      speciesClass.found = 0;
      for (const species of speciesClass.species) {
        if (species.checked) {
          speciesClass.found++;
        }
      }
      this.totalFound += speciesClass.found;
    }
    this.save();
  }

  restore() {
    this.storage.get('speciesArray').then(speciesArray => {
      // let same = true;
      // if (speciesArray && speciesArray.length === this.speciesClass.length) {
      //   for (const species in speciesArray) {
      //     if (
      //       speciesArray[species].species.length !==
      //       this.speciesClass[species].species.length
      //     ) {
      //       same = false;
      //       break;
      //     }
      //   }
      // }

      // If species arrays are the same classes and species, then restore
      if (JSON.stringify(speciesArray) === JSON.stringify(this.speciesClass)) {
        console.log('Running if');
        this.speciesClass = null;
        this.speciesClass = speciesArray
          .map(item => {
            item.expanded = false;
            return item;
          });
        this.totalFound = 0;
        for (const speciesClass of this.speciesClass) {
          this.totalFound += speciesClass.found;
        }
      } else {
        console.log('Running else');

        // Loop through array and restored "checked"s
        // tslint:disable-next-line: forin
        for (const index in speciesArray) {
          // tslint:disable-next-line: forin
          for (const speciesIndex in speciesArray[index].species) {
            for (const thisSpeciesIndex in this.speciesClass[index].species) {
              if (this.speciesClass[index].species[thisSpeciesIndex].id === speciesArray[index].species[speciesIndex].id) {
                this.speciesClass[index].species[thisSpeciesIndex] = speciesArray[index].species[speciesIndex];
                console.log('Did the thing');
                break;
              }
            }
          }
        }
      }
    });
    console.log('Species restored.');
    console.log(this.speciesClass);
    this.save();
  }

  save() {
    this.storage.set('speciesArray', this.speciesClass);
    console.log('Species saved.');
    console.log(this.speciesClass);
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
    for (const obj of this.speciesClass) {
      obj.found = 0;
      for (const species of obj.species) {
        species.checked = false;
      }
    }
    this.totalFound = 0;
    this.save();
  }

  toggleClass(speciesClass) {
    speciesClass.expanded = !speciesClass.expanded;
    for (const obj of this.speciesClass) {
      if (obj.expanded === true) {
        this.anyExpanded = true;
        break;
      }
      this.anyExpanded = false;
    }
  }

  toggleExpandAll() {
    for (const speciesClass of this.speciesClass) {
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
