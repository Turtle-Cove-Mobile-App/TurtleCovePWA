import { SpeciesClass } from '../../pages/checklist/species-class';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'speciesAlphabetical',
  pure: true
})
export class SpeciesAlphabeticalPipe implements PipeTransform {

  transform(obj: SpeciesClass): any {
    // let returnArr: any[][] = new Array(26);
    // for (const obj of array) {
    //   const index = obj.name.toLowerCase().charCodeAt(0) - 97;
    //   if (returnArr[index]) {
    //     returnArr[index].push(obj);
    //   }
    //   else {
    //     returnArr[index] = [obj];
    //   }
    // }
    // returnArr = returnArr.filter(val => val);
    // for (const val of returnArr) {
    //   val.sort((a, b) => a.name > b.name ? 1 : -1);
    // }
    // return returnArr;
    
    obj.speciesGrouped = new Array();

    obj.species.sort((a, b) => a.name > b.name ? 1 : -1);
    let currentIndex = 0;
    let prevLetter = obj.species[0].name.charAt(0).toLowerCase();
    
    for (const species of obj.species) {
      const currentLetter = species.name.charAt(0).toLowerCase();
      if (currentLetter > prevLetter) {
        // console.log(currentLetter + ' is greater than ' + prevLetter);
        currentIndex++;
        prevLetter = currentLetter;
      }
      if (obj.speciesGrouped[currentIndex]) {
        obj.speciesGrouped[currentIndex].push(species);
      }
      else {
        obj.speciesGrouped[currentIndex] = [species];
      }
    }
    return obj;
  }

  // transform(array, letter): any {
  //   const filterArray = array.filter(eachItem => {
  //     return eachItem.name.toLowerCase().startsWith(letter.toLowerCase());
  //   });
  //   if (filterArray.length > 0) {
  //     return filterArray;
  //   } else {
  //     return null;
  //   }
  // }

}
