import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IProducto } from '../producto-interface';
import { ProductoService } from '../producto.service';
import { Product} from './productos';

@Component({
  selector: 'app-productos-comp',
  templateUrl: './productos-comp.component.html', 
  styleUrls: ['./productos-comp.component.css','./productos.scss']
})
export class ProductosCompComponent implements OnInit {

  //boton imagen
  uploadedFiles: any[] = [];
  messageService: any;
  productoSeleccionado: any;
  editar: any;
  onUpload(event: { files: any; }) { //ALE ME DIJO DE SACAR EL FOR (LE SAQUE FOTO AL CODIGO)
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  //form control
  name = new FormControl('');

  //dialog
  display: boolean = false;
  showDialog() {
      this.display = true;
  }

  //productos 

  public products: Product[]=[];

  responsiveOptions:any[]=[];

  //formulario bd
  public formularioProducto: FormGroup

  //coleccion de productos
  public productos: IProducto[] = [];

  //ruta de almacenamiento de imagen
  public pathImagen: String='';

  //imagen
  private file!: File;
  

  

  constructor(private fb:FormBuilder, private productoService: ProductoService) { 
    //form bd
    //inicializamos el formulario
    this.formularioProducto = this.fb.group({
      producto: ['', Validators.required],
      precio: ['', Validators.required],
      descripcion: ['', Validators.required],
      //url: ['', Validators.required]
    })

    //form fijo

    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }
  async guardarProducto(){

    //pregunto si el formulario es valido
    if(!this.formularioProducto.invalid){
      //pregunto si quiero editar
      if(this.editar){
        //pregunto si cargue algo en el file
        //en caso de que no se cargu nada edito el producto sin subir imagen
        if(this.file==undefined){
          this.productoService.editarProducto(this.productoSeleccionado!.id, this.formularioProducto.value).then(resp=>{
            this.editar= false;
            alert('Producto editado con exito');
            this.formularioProducto.reset();
          })
        }
        //Si en el file contiene algo entonces lo subo
        else{
          this.productoService.subirImagen(this.file!, this.formularioProducto.value, this.productoSeleccionado!.id )
          this.productoSeleccionado=undefined;
          //this.file = undefined;
          this.formularioProducto.reset();
        }
        
      }
      else{
        console.log(this.formularioProducto.value);//lleva los datos a la bd (.agregarImagen => subirImagen)
        this.productoService.subirImagen(this.file, this.formularioProducto.value);/*.then((result)=>{
        alert('Producto agregado con exito');
        this.formularioProducto.reset;
        })*/
        alert('Producto agregado con exito');
        this.formularioProducto.reset();
        //this.file = undefined;
        
      }   
    }
    else{
      alert('El formulario es invalido')//en caso de no llenar un casillero del formulario
    }
  }
  //Metodo que se comunica con el service para eliminar un producto por su id
  eliminarProducto(id: string){
    let c= confirm('¿Estas seguro de eliminar el producto?')
    if(c){
      this.productoService.eliminarProducto(id).then((result)=>alert('Producto eliminado con exito'))

    }
  }
  seleccionarProducto(Producto: IProducto){
    this.editar =true;
    this.productoSeleccionado= Producto;
    const {producto, precio, descripcion, url} = Producto;
    this.formularioProducto.setValue({
      producto,
      precio,
      descripcion,
      url
    })
  }
  resetFormulario(){
    this.formularioProducto.reset();
    this.editar=false;
  }
  obtenerFile(event:any){
    this.file= event.target.files[0];
  }

  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe((productos)=>{
      console.log(productos )
      this.productos = productos; //Hago referencia al productos de la linea 33 = productos bd
    })

    this.products = [
      {
        id: "1000",
        code: "f230fh0g3",
        name: "One Piece",
        description: "Product Description",
        image: "/remera1.jpg", 
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5
      },
      {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "/remera2.jpg",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5
      },{
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "/remera3.jpg",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5
      },
      {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "/img4.webp",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5
      },{
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "/img5.jpg", 
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5
      },
      
      {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "/img6.jpg",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5
      },{
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "/img7.jpg",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5
      },
      {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "/img8.webp",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5
      },
      ]
      
  }


}



function result(result: any) {
  throw new Error('Function not implemented.');
}

