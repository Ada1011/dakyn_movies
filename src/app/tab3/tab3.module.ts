import { SlideshowParesComponent } from './../components/slideshow-pares/slideshow-pares.component';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { ComponentsModule } from '../components/components-module';
import { PipesModule } from '../pipes/pipes-module';
import { SlideshowPosterComponent } from "../components/slideshow-poster/slideshow-poster.component";
import { SlideshowBackdropComponent } from '../components/slideshow-backdrop/slideshow-backdrop.component';
import { RouterModule } from '@angular/router';
import { DetalleComponent } from '../components/detalle/detalle.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule,
    ComponentsModule,
    PipesModule,
    SlideshowPosterComponent,
    SlideshowBackdropComponent,
    SlideshowParesComponent,DetalleComponent,

    RouterModule.forChild([{path:'', component:Tab3Page}])
],
  declarations: [Tab3Page],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class Tab3PageModule {}
