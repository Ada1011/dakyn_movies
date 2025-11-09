
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { PipesModule } from '../pipes/pipes-module';
import { ImagenPipe } from "../pipes/imagen-pipe";
import { ComponentsModule } from '../components/components-module';
import { SlideshowBackdropComponent } from "../components/slideshow-backdrop/slideshow-backdrop.component";
import { SlideshowPosterComponent } from '../components/slideshow-poster/slideshow-poster.component';
import { SlideshowParesComponent } from '../components/slideshow-pares/slideshow-pares.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    PipesModule,
    ImagenPipe, ComponentsModule,
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowParesComponent,
],
  declarations: [Tab1Page],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,]
})
export class Tab1PageModule {}
