import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  textoBuscar = '';
  buscando = false;
  ideas: string[]=['Spiderman','Avengers','El señor de los anillos', 'la vida es bella'];
  peliculas: Pelicula[]= [];

  buscar(event?: any){

    const valor: string = event.detail.value;
    if (valor.length === 0) {
      this.buscando = false;
      this.peliculas = [];
      return;
    }
    // console.log(valor);
    this.buscando = true;
    this.movieService.buscarPeliculas(valor)
      .subscribe( (resp: any) =>{
        console.log(resp);
        this.peliculas = resp['results'];
        this.buscando=false;
      });
  }

  selectIdea(idea: string) {
  this.textoBuscar = idea;

  // Simula el evento para llamar a buscar()
  this.buscar({ detail: { value: idea } });
}

ngOnInit() {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

}

  constructor(private movieService:MovieService, private modalCtrl:ModalController) {}
  async detalle(id: string){
      const modal = await this.modalCtrl.create({
        component:DetalleComponent,
        componentProps:{
          id
        }
      });
      modal.present();
    }
}
