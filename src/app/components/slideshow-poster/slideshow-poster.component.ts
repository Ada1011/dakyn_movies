import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { Pelicula, PeliculaDetalle } from 'src/app/interfaces/interfaces';
import { IonicModule, ModalController } from '@ionic/angular';
import { ComponentsModule } from '../components-module';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes-module';
import { ImagenPipe } from 'src/app/pipes/imagen-pipe';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
  imports:[IonicModule,CommonModule,ComponentsModule,FormsModule,PipesModule,ImagenPipe,ExploreContainerComponentModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class SlideshowPosterComponent  implements OnInit {
  @Input() peliculas: PeliculaDetalle[]=[];

  swiperConfig = {
    // direction: 'horizontal',
    slidesPerView: 1/3/5,
    freeMode:true,
    // spaceBetween: 2,
  };
  constructor(private modalCtrl:ModalController) { register(); }

  ngOnInit() {
    // console.log('Datos de peliculasRecientes:', this.peliculas);
  }
     async verDetalle(id: string){
        const modal = await this.modalCtrl.create({
          component:DetalleComponent,
          componentProps:{
            id
          }
        });
        modal.present();
      }
}
