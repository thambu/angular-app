import { Pipe, PipeTransform } from '@angular/core';
import { MovieDetails } from './movies/models/movie-details.model';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: MovieDetails[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
searchText = searchText.toLowerCase();
return items.filter( it => {
      return it.name.toLowerCase().includes(searchText);
    });
   }
}