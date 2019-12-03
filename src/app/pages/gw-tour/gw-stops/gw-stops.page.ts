import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GwStopComponent } from './gw-stop/gw-stop.component';
import { PluginsService } from '../../../services/plugins-service/plugins.service';


@Component({
  selector: 'tc-gw-stops',
  templateUrl: './gw-stops.page.html',
  styleUrls: ['./gw-stops.page.scss'],
})
export class GwStopsPage implements OnInit {

  public stops = [
    {
      title: 'Joyce Boardwalk',
      info: `The Joyce Boardwalk is the most northerly point on the Manchac Greenway, and is a wooden
      walkway through a cypress-tupelo swamp that meanders a little less than 800m showcasing the
      core plant life of the swamp such as cypress, tupelo, red maple, red bay, and wax myrtle. It is
      common to see different species of water snakes, frogs, alligators, and birds from the boardwalk.
      Signage for different animal species has been provided to LDWF by the Turtle Cove
      Environmental Research Station and will be installed for self-guided learning on this trail. A tour
      guide will explain the importance of swamp wetlands and their role in flood resistance, nutrient
      recycling, and animal habitats while helping groups spot and identify wildlife near the
      boardwalk. The end of the walkway has an enlarged seating area where the tour guide can take a
      salinity reading of the water and discuss the importance of maintaining this freshwater habitat.`,
      img: 'assets/img/stops/0.jpg',
      coords: [0, 0]
    },
    {
      title: 'North Pass Public Boat Launch',
      info: `The North Pass Boat Launch is a popular launch into the Lake Maurepas, Pass Manchac
      and Lake Pontchartrain region. Existing plans to install a gazebo structure and restrooms as this
      site would make it an ideal location to add educational signage displaying information about the
      ecosystem and history of the Manchac area. The boat launch site is a paved area with little to
      offer a landlocked ecotourism group, but the launch can engage local boaters with signage as an
      interface to connect them with the Greenway and information on the natural value of the area.`,
      img: 'assets/img/stops/1.jpg',
      coords: [0, 0]
    },
    {
      title: 'Shell Bank Bayou',
      info: `Shell Bank Bayou is a 2-mile-long bayou that runs from Lake Maurepas to Hwy 51
      through the Maurepas Swamp WMA. The site is a very popular spot for both canoers and kayakers alike
      due to its rich surrounding wildlife and gorgeous views.`,
      img: 'assets/img/stops/6.png',
      coords: [0, 0]
    },
    {
      title: `Middendorf's Seafood Restaurant`,
      info: `Middendorf’s is a willing partner that could provide a meeting site for tour groups
      visiting the Manchac Greenway. Their outdoor seating area is compatible with a projector and
      screen presentation that can be given to groups by a guide during lunch or dinner The location of
      the restaurant by the Pass is ideal for beginning or ending a tour in Tangipahoa Parish.`,
      img: 'assets/img/stops/2.jpg',
      coords: [0, 0]
    },
    {
      title: `Turtle Cove Environmental Research Station Boatshed and Classroom on Galva Canal`,
      info: `The Turtle Cove Research Station Boatshed and Classroom facility on Galva Canal is
      operated by Southeastern Louisiana University, and sits on the same property as the LDWF
      Manchac WMA. These facilities are accessible by car on Galva Canal in St. John the Baptist
      Parish as a launching site for the main Turtle Cove Environmental Research Station on Pass
      Manchac that is only accessible by boat. The research station itself features a museum of artifacts
      and taxidermy animals from the region, and an extensive boardwalk with educational species
      plaques that extends into the marsh of the Manchac WMA. The artifact museum and boardwalk
      may be offered for special promotional events separate from the traditional ecotours.`,
      img: 'assets/img/stops/3.jpg',
      coords: [0, 0]
    },
    {
      title: `LDWF Maurepas Swamp Nature Trail`,
      info: `The Maurepas Swamp Nature Trail is an unpaved walkway that extends about 800m into
      the Maurepas Swamp WMA. This scenic trail has a distinctly different tree assemblage than the
      Joyce Boardwalk. Both areas are considered swamp, but the striking differences between the two
      sites will allow tour guides to exhibit and talk to groups about the impact of historic logging in
      the area that has allowed non-native plant and animal life to take root. Identification guides for
      common plants and animals on the nature trail can be provided. Periods of high flooding can
      easily submerge the trail, so tours at this site must be planned around high water levels.`,
      img: 'assets/img/stops/4.jpg',
      coords: [0, 0]
    },
    {
      title: `Frenier’s Landing Restaurant and Oyster Bar`,
      info: `Frenier’s Landing is another restaurant amenable to serving as a meeting site for tour
      groups in St. John the Baptist Parish. It is conveniently located near the Maurepas Swamp Nature
      Trail. They offer a spacious open-air dining area, an amazing view of Lake Pontchartrain, live
      entertainment, and room for parking and gathering`,
      img: 'assets/img/stops/5.jpg',
      coords: [0, 0]
    }
  ];

  constructor(private modalCtrl: ModalController, public plugins: PluginsService) { }

  ngOnInit() {

  }

  async showModal(stop) {
    const modal = await this.modalCtrl.create({
      component: GwStopComponent,
      cssClass: 'transparent-modal',
      componentProps: {
        item: stop
      }
    });
    await modal.present();
  }

}
