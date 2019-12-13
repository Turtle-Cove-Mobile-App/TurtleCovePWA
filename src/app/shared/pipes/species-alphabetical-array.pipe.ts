import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'speciesAlphabeticalArray',
  pure: true
})
export class SpeciesAlphabeticalArrayPipe implements PipeTransform {

  transform(array: any[]): any {
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
    
    let returnArr: any[][] = new Array();

    array.sort((a, b) => a.name > b.name ? 1 : -1);
    let currentIndex = 0;
    let prevLetter = array[0].name.charAt(0).toLowerCase();
    
    for (const obj of array) {
      const currentLetter = obj.name.charAt(0).toLowerCase();
      if (currentLetter > prevLetter) {
        // console.log(currentLetter + ' is greater than ' + prevLetter);
        currentIndex++;
        prevLetter = currentLetter;
      }
      if (returnArr[currentIndex]) {
        returnArr[currentIndex].push(obj);
      }
      else {
        returnArr[currentIndex] = [obj];
      }
    }
    array = returnArr;
    return array;
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
