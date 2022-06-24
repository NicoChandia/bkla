import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: []
  //styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent implements OnInit {
  //dialog
  display: boolean = false; //esto
  showDialog() {
      this.display = true;
  }

  items: MenuItem[] = [];

  public logueado:boolean = false; //false porque todavía nadie inicia sesion al entrar en la pagina

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user.subscribe((user)=>{
      if(user){
        this.logueado = true;
      }else{
        this.logueado = false;
      }
    })
    this.items = [
      {
          label: 'Nosotros',
          icon: 'pi pi-fw pi-users', //pi-heart
          routerLink : 'nosotros'
      },
      {
          label: 'Contactos',
          icon: 'pi pi-fw pi-phone',
          routerLink : 'contactos'
      },

      {
          label: 'Productos',
          icon: 'pi pi-shopping-cart',
          routerLink : 'productos'
      }
    ];
  }

  cerrarSesion(){
    this.auth.logOut().then(()=>{
      alert("Sesion cerrada con exito");
    }).catch(()=>{
      alert("Problemas al cerrar sesion")
    })
  }
}
