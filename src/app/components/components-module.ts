import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes-module';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ImagenPipe } from '../pipes/imagen-pipe';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  // declarations: [SlideshowBackdropComponent],
  // exports:[SlideshowPosterComponent,SlideshowBackdropComponent,SlideshowParesComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    PipesModule,ExploreContainerComponentModule,
    ImagenPipe,
    DetalleComponent,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule { }
