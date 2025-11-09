
import { Pelicula } from '../interfaces/interfaces';
import { MovieService } from './../services/movie.service';
import { Component, OnInit } from '@angular/core';

import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,

})
export class Tab1Page implements OnInit {

  constructor(private movieService: MovieService) {}

  peliculasRecientes: Pelicula[] = [];
  populares: Pelicula[] = [];

  // swiperConfig = {
  //   // direction: 'horizontal',
  //   slidesPerView: 1.3,
  //   freeMode:true,
  //   // spaceBetween: 2,
  // };

  ngOnInit(){
    this.movieService.getFeature()
      .subscribe(resp  => {
        console.log('Resp',resp);
        this.peliculasRecientes = resp.results;
      });

    this.getPopulares();
  }
  cargarMas(){
    this.getPopulares();
  }

  getPopulares(){
    this.movieService.getPopulares().subscribe(
      resp => {
        // console.log('Populares',resp.results);
        const arrTemp = [...this.populares,...resp.results];
        this.populares = arrTemp;
      }
    );
  }
}
