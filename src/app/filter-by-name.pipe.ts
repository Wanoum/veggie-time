import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName',
  pure: false
})

export class FilterByNamePipe implements PipeTransform {

  transform(items: any[], term: any): any[] {
    return term 
      ? items.filter(item => item.title.indexOf(term) !== -1)
      : items;
  }
}