import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  //dialog
    display: boolean = true; //false (si es boton)
    /*
  showDialog() {
      this.display = true;
  }
*/
  
  formularioLogin: FormGroup;

//inicializo formulario 
  constructor(private fb:FormBuilder, private auth:AuthService, private router: Router) { 
    //form bd
    //inicializamos el formulario
    this.formularioLogin = this.fb.group({
      username: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
    })
  }


  ngOnInit(): void {
  }

  iniciarSesion(){
    //si el formulario es valido inicio sesion
    if(!this.formularioLogin.invalid){
      //obtengo esos datos del formulario 
      const {username, password}= this.formularioLogin.value;
      //inicio sesion en firebase llamndo al metodo de mi service
      this.auth.login(username, password).then((resp) => {
        alert("Iniciaste Sesión Correctamente"); //(resp) el navegador tira object Object pero toma al usuario cargado en firebase
        this.router.navigateByUrl('productos'); //si los datos comprobados son correctos ahi podes navegar
      }).catch((error) =>{
        alert("Datos Incorrectos, verifique que el usuario exista") //(error) el navegador te escribe que error tiene
      })

    }
    else{
      alert("Revise los datos, son incorrectos");
    }
  }
}


