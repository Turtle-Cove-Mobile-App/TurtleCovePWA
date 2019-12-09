import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSpeciesByNameStartsWith',
  pure: true
})
export class FilterSpeciesByNameStartsWithPipe implements PipeTransform {
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
