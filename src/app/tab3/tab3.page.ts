import { Component, OnInit } from '@angular/core';

import { DataLocalService } from '../services/data-local.service';
import { MovieService } from '../services/movie.service';
import { Genre, PeliculaDetalle } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,

})
export class Tab3Page{

  generos: Genre[] = [];
  peliculas: PeliculaDetalle[] = [];
  favoritoGenero: any[] = [];

  constructor(
    private dataLocal:DataLocalService,
     private movieService:MovieService,
     ) {}


async ionViewWillEnter(){
  this.peliculas = await this.dataLocal.cargarFavoritos();
  //  console.log("log 1 de tab3",this.peliculas); //log 1 tab3
  //   console.log("Contenido de la primera película:", this.peliculas[0]);
  //   console.log("Poster path de la primera película:", this.peliculas[0].poster_path);
  //  console.log("log 2 de tab3",this.dataLocal.existePelicula(this.peliculas)); //log 2 tab3
    if (this.generos.length===0) {
      this.generos = await this.movieService.cargarGeneros();
    }
    this.pelisPorGenero(this.generos,this.peliculas);
}
async refrescarFavoritos() {
    await this.ionViewWillEnter();  // Fuerza la recarga
  }
  pelisPorGenero( generos: Genre[], peliculas: PeliculaDetalle[]){
    this.favoritoGenero = [];
    generos.forEach(genero =>{
      this.favoritoGenero.push({
        genero: genero.name,
        pelis: peliculas.filter( peli =>{
          return peli.genres?.find(genre => genre.id === genero.id);
        })
      });
    });
    console.log(this.favoritoGenero);
  }
}
