import { Component, OnInit } from '@angular/core';

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
      species: ['One Fish', 'Two Fish', 'Red Fish', 'Blue Fish']
    },
    {
      class: 'Reptiles',
      species: ['Snek', 'Lizard Person']
    },
    {
      class: 'Plants',
      species: ['Grass', 'Happy Little Tree', 'Flower']
    },
    {
      class: 'Birds',
      species: ['Screeching Owl', 'Bald Eagle']
    },
    {
      class: 'Mammals',
      species: ['Pao', 'Red Head Canadian', 'McDowell', 'G-Doc', 'Zac']
    }
  ];

  constructor() {}

  ngOnInit() {}
}
