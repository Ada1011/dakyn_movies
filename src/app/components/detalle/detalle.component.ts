import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonIcon, ModalController } from '@ionic/angular';
import { Cast, PeliculaDetalle } from 'src/app/interfaces/interfaces';
import { MovieService } from 'src/app/services/movie.service';
import { ImagenPipe } from "../../pipes/imagen-pipe";
import { PipesModule } from 'src/app/pipes/pipes-module';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonicModule, FormsModule, CommonModule, ImagenPipe,PipesModule]
})
export class DetalleComponent  implements OnInit {
  @Input() id:any;
  oculto = 150;
  actores: Cast[]=[];
  pelicula: PeliculaDetalle = {
    id: 1,
    poster_path: ''
  };
  estrella= 'star-outline';

  slideOptActores ={
    slidesPerView: 3.3,
    freeMode:true,
    spacebetween: -5

  };

  constructor( private moviesService:MovieService,
               private modalCtrl:ModalController,
               private dataLocal: DataLocalService
  ) { }



   ngOnInit() {
    // console.log('ID', this.id);

    this.dataLocal.existePelicula(this.id)
    .then(existe => this.estrella = (existe) ? 'star' : 'star-outline');
    // console.log('Detalle component', existe);
    this.moviesService.getPeliculaDetalle(this.id)
    .subscribe( resp => {
      console.log(resp);
      this.pelicula  = resp;
    });
    this.moviesService.getActoresPelicula(this.id)
    .subscribe( resp => {
      console.log(resp);
      this.actores = resp.cast;
    });
  }
 regresar(){
    this.modalCtrl.dismiss();
  }
  favorito(){
    const existe = this.dataLocal.guardarPelicula(this.pelicula)
      this.estrella = (existe) ? 'star' : 'star-outline';

  }
}
