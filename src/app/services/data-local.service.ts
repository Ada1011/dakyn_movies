import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { PeliculaDetalle } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root',
})
export class DataLocalService {

  peliculas: PeliculaDetalle[] = [];

 private _storage: Storage | null = null;
  constructor(
              private storage:Storage,
              private toastCtrl: ToastController
            )
  {
    // this.init();
    this.cargarFavoritos();
  }
  //  async init() {
  //   const storage = await this.storage.create();
  //   this._storage = storage;
  //   this.peliculas = (await this._storage.get('peliculas')) || [];
  // }
  async presentToast(message: string){
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500
    });
    toast.present();
  }
  guardarPelicula(pelicula: PeliculaDetalle){
    let existe = false;
    let mensaje = '';

    for (const peli of this.peliculas) {
      if (peli.id === pelicula.id) {
        existe = true;
        break;
      }
    }

    if (existe) {
      this.peliculas = this.peliculas.filter(peli => peli.id !== pelicula.id);
      mensaje = 'Removido de favoritos';

    }else{
      this.peliculas.push(pelicula);
      mensaje = 'Agregada a favoritos';
    }
    // this.peliculas.push(pelicula);
    this.presentToast(mensaje);
    this.storage.set('peliculas', this.peliculas);
    return !existe;
  }

  async cargarFavoritos(){
    const peliculas_st = await this.storage.create();
    this._storage = peliculas_st;
    const peliculas = await this._storage.get('peliculas');
    this.peliculas = peliculas || [];
    return this.peliculas;
  }

  async existePelicula(id: any){
    // console.log(id);
    id = Number(id);
    // console.log(id);

    await this.cargarFavoritos();
    const existe = this.peliculas.find( peli => peli.id ===id);
    return (existe) ?  true : false;
  }
}
