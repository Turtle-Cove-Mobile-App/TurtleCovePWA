import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByStartsWith',
  pure: false
})
export class FilterByStartsWithPipe implements PipeTransform {

  transform(array, letter): any {
    return array.filter(eachItem => {
      return (
        eachItem.toLowerCase().startsWith(
          letter.toLowerCase()
        )
      );
    });
  }

}
