
import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';
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
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
  imports:[IonicModule,CommonModule,ComponentsModule,FormsModule,PipesModule,ImagenPipe,ExploreContainerComponentModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class SlideshowParesComponent  implements OnInit {
  @Input() peliculasRecientes: Pelicula[]=[];
  @Output() cargarMas = new EventEmitter();
  swiperConfig = {
    // direction: 'horizontal',
    slidesPerView: 1/2/3/4,
    freeMode:true,
    spaceBetween: -10,
  };
  constructor(private modalCtrl:ModalController) { register(); }

    ngOnInit() {
      // console.log('Datos de peliculasRecientes:', this.peliculasRecientes);
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
  onClick(){
    // console.log('Cargar mas');
    this.cargarMas.emit();
  }
}
