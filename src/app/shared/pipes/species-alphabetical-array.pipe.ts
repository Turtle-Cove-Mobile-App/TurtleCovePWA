import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'speciesAlphabeticalArray',
  pure: true
})
export class SpeciesAlphabeticalArrayPipe implements PipeTransform {

  transform(array: any[]): any {
    let returnArr: any[][] = new Array(26);
    for (const obj of array) {
      returnArr[obj.name.toLowerCase().charCodeAt(0) - 97].push(obj);
    }
    returnArr.filter(val => val);
    return returnArr;
  }

  transform(array, letter): any {
    const filterArray = array.filter(eachItem => {
      return eachItem.name.toLowerCase().startsWith(letter.toLowerCase());
    });
    if (filterArray.length > 0) {
      return filterArray;
    } else {
      return null;
    }
  }

}
