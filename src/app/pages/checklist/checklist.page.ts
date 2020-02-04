import { ImageViewService } from 'src/app/services/image-view/image-view.service';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Species } from './species';
import { SpeciesClass } from './species-class';
import { ZoomComponent } from 'src/app/shared/zoom/zoom.component';

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
      new Species(6, 'Catfish', 'Siluriformes'),
      new Species(7, 'Crawfish', 'Decapoda'),
      new Species(8, 'Damselfly larvae', 'Zygoptera'),
      new Species(9, 'Dragonfly larvae', 'Anisoptera'),
      new Species(10, 'Fishing Spider', 'Dolomedes'),
      new Species(11, 'Gambusia (Mosquito Fish)', 'Gambusia affinis'),
      new Species(12, 'Giant Water Bug', 'Belostomatidae'),
      new Species(13, 'Grass Shrimp', 'Palaemonidae'),
      new Species(14, 'Gulf Killifish (Cocahoe)', 'Fundulus grandis'),
      new Species(15, 'Gulf Menhaden', 'Brevoortia patronus'),
      new Species(16, 'Largemouth Bass', 'Micropterus salmoides'),
      new Species(17, 'Least Killifish', 'Heterandria formosa'),
      new Species(18, 'Louisiana Pearlshell Mussel', 'Margaritifera hembeli'),
      new Species(19, 'Lubber grasshopper', 'Romalea guttata'),
      new Species(20, 'Mud Crab', 'Scylla serrata'),
      new Species(21, 'Naked Goby', 'Gobiosoma bosc'),
      new Species(22, 'Predaceous Diving Beetle', 'Dytiscidae'),
      new Species(23, 'Rangia Clam', 'Rangia cuneata'),
      new Species(24, 'Ribbed Mussel', 'Geukensia demissa'),
      new Species(25, 'Sailfin Molly', 'Poecilia latipinna'),
      new Species(26, 'Scrud', 'Amphipoda'),
      new Species(27, 'Sheepshead Minnow', 'Cyprinodon variegatus'),
      new Species(28, 'Spotted Gar', 'Lepisosteus oculatus'),
      new Species(29, 'Striped Mullet', 'Mugil cephalus'),
      new Species(30, 'Topwater Minnow', 'Cypriniformes'),
      new Species(31, 'Water Boatman', 'Corixidae'),
      new Species(32, 'Water Scorpion', 'Nepidae'),
      new Species(33, 'White Shrimp', 'Litopenaeus setiferus'),
    ]),
    new SpeciesClass('Reptiles and Amphibians', [
      new Species(0, 'Alligator Snapping Turtle', 'Macrochelys temminckii'),
      new Species(1, 'American Bullfrog', 'Rana catesbeiana'),
      new Species(2, 'American Alligator', 'Alligator mississippiensis'),
      new Species(3, 'Anole', 'Anolis carolinensis'),
      new Species(4, 'Broad Banded Watersnake', 'Nerodia fasciata confluens'),
      new Species(5, 'Common garter snake', 'Thamnophis sirtalis'),
      new Species(6, 'Cottonmouth snake', 'Agkistrodon piscivorus'),
      new Species(7, 'Cricket Frog', 'Acris gryllus'),
      new Species(8, 'Diamondback Water Snake', 'Nerodia rhombifer'),
      new Species(9, 'Green Tree Frog', 'Hyla cinerea'),
      new Species(10, 'Red-eared Slider Turtle', 'Trachemys scripta elegans'),
      new Species(11, 'Snapping Turtle', 'Chelydra serpentina'),
      new Species(12, 'Smooth Softshell Turtle', 'Apalone mutica')
    ]),
    new SpeciesClass('Plants', [
      new Species(0, 'Alligatorweed', 'Alternanthera philoxeroides'),
      new Species(1, 'Baldcypress', 'Taxodium distichum'),
      new Species(2, 'Bulltongue', 'Safittaria lancifolia'),
      new Species(3, 'Bulrush', 'Scriptus robustus'),
      new Species(4, 'Buttonbush', 'Cephalanthus occidentalis'),
      new Species(5, 'Canary grass', 'Phalaris spp.'),
      new Species(6, 'Common Rush', 'Juncus effuses'),
      new Species(7, 'Deer Pea', 'Vigna luteola'),
      new Species(8, 'Dodder', 'Cuscuta spp.'),
      new Species(9, 'Dollarweed', 'Hydrocotyla umbellata'),
      new Species(10, 'Dwarf Palmetto', 'Sabal minor'),
      new Species(11, 'Iris', 'Iris virginica'),
      new Species(12, 'Leafy Three-Square', 'Schodnoplectus robustus'),
      new Species(13, 'Marsh elder', 'Iva frutescens'),
      new Species(14, 'Marsh morning glory', 'Ipomoea sagittata'),
      new Species(15, 'Pickerel weed', 'Pontederia cordata'),
      new Species(16, 'Rattlebox', 'Sesbania drummondii'),
      new Species(17, 'Salt Marsh Aster', 'Aster subulatus'),
      new Species(18, 'Seaside Goldenrod', 'Solidago sempervirens'),
      new Species(19, 'Smartweed', 'Polygonum punctatum'),
      new Species(20, 'Smooth cordgrass', 'Spartina paten'),
      new Species(21, 'Southern Cattail', 'Typha spp.'),
      new Species(22, 'Spider lily', 'Hymenocallis caroliniana'),
      new Species(23, 'Swamp Red Maple', 'Acer rubrum'),
      new Species(24, 'Tallow tree', 'Triadica sebifera'),
      new Species(25, 'Three-cornered grass', 'Schoenoplectus americanus'),
      new Species(26, 'Virginia saltmarsh mallow', 'Kasteletzkya virginica'),
      new Species(27, 'Waxmyrtle', 'Myrica cerifera')
    ]),
    new SpeciesClass('Birds', [
      new Species(0, 'Anhinga', 'Anhinga anhinga'),
      new Species(1, 'Bald Eagle', 'Haliaeetus leucocephalus'),
      new Species(2, 'Barred Owl', 'Strix varia'),
      new Species(3, 'Belted Kingfisher', 'Megaceryle alcyon'),
      new Species(4, 'Brown Pelican', 'Pelecanus accidentalis'),
      new Species(5, 'Coot', 'Fulica americana'),
      new Species(6, 'Cormorant', 'Phalacrocorax auritus'),
      new Species(7, 'Great Blue Heron', 'Ardea herodias'),
      new Species(8, 'Great Egret', 'Ardea alba'),
      new Species(9, 'Ibis', 'Eudocimus albus'),
      new Species(10, 'Laughing Gull', 'Laurs atricilla'),
      new Species(11, 'Mallard', 'Anas platyrhynchos'),
      new Species(12, 'Night Heron', 'Nycticorax nycticorax'),
      new Species(13, 'Osprey', 'Pandion haliaetus'),
      new Species(14, 'Red-cockaded Woodpecker', 'Picoides borealis'),
      new Species(15, 'Red-shouldered Hawk', 'Buteo lineatus'),
      new Species(16, 'Red-winged Blackbird', 'Agelaius phoeniceus'),
      new Species(17, 'Snowy Egret', 'Egretta thula'),
      new Species(18, 'Wood Duck', 'Aix sponsa')
    ]),
    new SpeciesClass('Mammals', [
      new Species(0, 'Cotton Mouse', 'Peromyscus gossypinus'),
      new Species(1, 'Nutria', 'Myocastor coypus'),
      new Species(2, 'Rabbit', 'Oryctolagus cuniculus'),
      new Species(3, 'Raccoon', 'Procyon lotor'),
      new Species(4, 'River Otter', 'Lontra Canadensis'),
      new Species(5, 'White Tailed Deer', 'Odocoileus viginianus'),
      new Species(6, 'Wild Boar', 'Sus scrofa')
    ])
  ];

  constructor(
    private storage: Storage,
    private alertController: AlertController,
    private modalCtrl: ModalController,
    public imgService: ImageViewService
  ) {
    // if (!environment.production) {
    //   this.speciesClass[this.speciesClass.length - 1].species.push(
    //     ...[
    //       new Species(0, 'Pao', 'Asian'),
    //       new Species(1, 'Red Head Canadian', 'CANADIAN'),
    //       new Species(2, 'McDowell', 'Zoiks!'),
    //       new Species(3, 'G-Doc', 'Projects')
    //     ]
    //   );
    // }
  }

  ngOnInit() {
    for (const obj of this.speciesClass) {
      obj.species = obj.species.sort((a, b) => (a.name > b.name) ? 1 : -1);
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
      if (speciesArray) {
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
          // console.log('Running if');
          this.speciesClass = null;
          this.speciesClass = speciesArray
            .map(item => {
              item.expanded = false;
              return item;
            });
        } else {
          // console.log('Running else');

          // Loop through array and restored "checked"s
          // tslint:disable-next-line: forin
          for (const index in speciesArray) {
            // tslint:disable-next-line: forin
            for (const speciesIndex in speciesArray[index].species) {
              for (const thisSpeciesIndex in this.speciesClass[index].species) {
                if (this.speciesClass[index].species[thisSpeciesIndex].id === speciesArray[index].species[speciesIndex].id) {
                  this.speciesClass[index].species[thisSpeciesIndex] = speciesArray[index].species[speciesIndex];
                  // console.log('Did the thing');
                  break;
                }
              }
            }
          }
        }
        this.checkChanged();
        console.log('Species restored.');
        // console.log(this.speciesClass);
        this.save();
      }
    });
  }

  save() {
    this.storage.set('speciesArray', this.speciesClass);
    console.log('Species saved.');
    // console.log(this.speciesClass);
  }

  async presentResetAlert() {
    const alert = await this.alertController.create({
      header: 'Reset All',
      message:
        'Are you sure you want to reset all of the checkboxes? This cannot be undone!',
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

  async openSpeciesInfo(speciesId, speciesClass) {
    const pathBase = 'assets/img/species/' + speciesClass.className.split(' ')[0].toLowerCase() + '/';
    this.imgService.images = speciesClass.species.map((item, index) => ({ id: item.id, path: pathBase + item.id + '.jpg' }));

    const modal = await this.modalCtrl.create({
      component: ZoomComponent,
      cssClass: 'transparent-modal',
      componentProps: {
        index: this.imgService.images.findIndex(image => image.id === speciesId)
      }
    });
    await modal.present();

    // console.log(species);
    // const popover = await this.modalCtrl.create({
    //   component: ModalComponent,
    //   componentProps: {
    //     species,
    //     speciesClass
    //   }
    // });
    // return await popover.present();
  }

  getSpeciesNames(obj) {
    return obj.map(item => item.name);
  }
}
