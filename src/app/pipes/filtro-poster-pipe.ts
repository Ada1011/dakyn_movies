import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPoster'
})
export class FiltroPosterPipe implements PipeTransform {

  transform(peliculas: any[]): any[] {
    return peliculas.filter( peli => {
      return peli.profile_path;  // Filtra por poster_path en lugar de backdrop_path
    });
  }
}
