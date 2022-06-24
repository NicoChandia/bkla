import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { IpcNetConnectOpts } from 'net';
import { finalize, map } from 'rxjs/operators';
import { IProducto } from './producto-interface';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  private productoCollection!: AngularFirestoreCollection<IProducto>;

  private urlImagen:string =''; //url de subirImagen

  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage) {
    this.productoCollection= this.firestore.collection<IProducto>('productos');//coleccion de productos
   }

   //obtener producto
   obtenerProductos(){
      //atento a cualquier cambio que se pueda producir
     return this.productoCollection!.snapshotChanges().pipe( //pipe para decirle que info quiero obtener de todo lo que me devolvio
      map (action=>action.map(a => a.payload.doc.data() as IProducto)) //nos muestra un arreglo simple de los productos de la bd
     )
   }

  //agregamos un producto a nuestra base de datos
  agregarProducto(producto: IProducto){
    return new Promise<void>(async(resolve, reject) => {
      try {
      
        //generamos un id automatico que se le asigna al producto
        const id= this.firestore.createId();
        producto.id=id;
  
        const result = await this.productoCollection.doc(id).set(producto);
        resolve(result)
        ;
      } catch (error) {//en caso de error lo captura
        reject(error);      
      }  
    })
  }

  eliminarProducto(id: string){
    return new Promise<void>(async(resolve, reject) => {
      try {
        const result = await this.productoCollection.doc(id).delete();
        resolve(result);

      } catch (error) {
        reject (error);
      }
    })  
  }
  editarProducto(id:string , infoProduc: IProducto){
    return new Promise<void>(async(resolve, reject) => {
      try {
        const result = await this.firestore.collection('productos').doc(id).update(infoProduc);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    })
  }
  subirImagen(file:File, producto: IProducto, idProducto?:string){
    //ruta a la imagen
    const imagenPath= 'imagenes/productos/${file.name}';
    //creamos la referencia a la imagen
    const imageRef= this.storage.ref(imagenPath);
    //subinmos la imagen a storage
    const tarea = this.storage.upload(imagenPath, file);
 
    //obtengo referencia de la imagen (la url)
    tarea.snapshotChanges().pipe( 
      finalize(()=>{
        imageRef.getDownloadURL().subscribe((url=>{
          this.urlImagen = url; //asigno referencia en la url que defino arriba arriba (variable url)
          
          //agrego la url de mi imagen a mi producto
          producto.url = this.urlImagen; //a mi url le asigno la url del storage
          if(idProducto){
            this.editarProducto(idProducto , producto)
          }
          else{
            this.agregarProducto(producto);
          }
          
        }))
      })).subscribe(); //subscribo cambios
  }
}
