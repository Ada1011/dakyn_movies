import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './imagen-pipe';
import { ParesPipe } from './pares-pipe';
import { FiltroImagenPipe } from './filtro-imagen-pipe';
import { FiltroPosterPipe } from './filtro-poster-pipe';
// import { ComponentsModule } from '../components/components-module';



@NgModule({
  // declarations: [ImagenPipe,ParesPipe],
  exports:[ImagenPipe,ParesPipe,FiltroImagenPipe,FiltroPosterPipe],
  imports: [
    CommonModule,
    ParesPipe,
    ImagenPipe,
    FiltroImagenPipe,
    FiltroPosterPipe,
  ]
})
export class PipesModule { }
