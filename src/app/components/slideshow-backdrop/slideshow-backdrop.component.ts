import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, input, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { ComponentsModule } from '../components-module';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes-module';
import { ImagenPipe } from 'src/app/pipes/imagen-pipe';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports:[IonicModule,CommonModule,ComponentsModule,FormsModule,PipesModule,ImagenPipe,ExploreContainerComponentModule]
})
export class SlideshowBackdropComponent  implements OnInit {

  @Input() peliculasRecientes: Pelicula[]=[];

  swiperConfig = {
    // direction: 'horizontal',
    slidesPerView: 1,
    freeMode:true,
    // spaceBetween: 2,
  };
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}


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
