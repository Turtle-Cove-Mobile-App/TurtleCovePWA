import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByStartsWith',
  pure: false
})
export class FilterByStartsWithPipe implements PipeTransform {

  transform(array, letter): any {
    const filterArray = array.filter(eachItem => {
      return (
        eachItem.toLowerCase().startsWith(
          letter.toLowerCase()
        )
      );
    });
    if (filterArray.length > 0) {
      return filterArray;
    }
    else {
      return null;
    }
  }

}
