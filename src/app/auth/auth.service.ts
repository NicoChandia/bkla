import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { rejects } from 'assert';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user!: Observable<any>;

  constructor(private auth: AngularFireAuth) {
    this.user= this.auth.authState
   }

  //metodo para iniciar sesion...Parametros: username:email ->string, password:->string
  login(username:string, password:string){
    return this.auth.signInWithEmailAndPassword(username, password);

    /*
    return new Promise((resolve, rejects) => {
      try{
        this.auth.signInWithEmailAndPassword(username, password).then((resp)=>{
          resolve("Iniciaste sesión de forma correcta");
        }).catch((resp) =>{
          rejects(resp)
        })

      }catch(error){
        rejects(error);
      }
    })
    */
  }
  //Metodo para cerrar sesion..parametros: no necesitamos 
  logOut(){
    return this.auth.signOut();
  }

  currentUser(){
    this.auth.authState;
  }
}
