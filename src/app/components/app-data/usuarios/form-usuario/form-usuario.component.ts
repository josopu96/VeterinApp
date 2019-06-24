import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../app.dataModels';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../../../../services/globalService';
import { DataManagement } from '../../../../services/dataManagement';
import { ErroresFormUsuario } from '../../../../models/errores';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.scss']
})
export class FormUsuarioComponent implements OnInit {

  tema = "_oscuro";
  new: boolean;
  ready = false;
  usuarioEditado: Usuario = new Usuario;
  antiguaClave = "";
  clave1 = "";
  clave2 = "";
  pass: boolean;
  claseClave = 'pass_cero';
  errores: ErroresFormUsuario = new ErroresFormUsuario();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private globalService: GlobalService,
    private dm: DataManagement
  ) { }

  ngOnInit() {
    this.inicializaErrores();
    this.tema = "_" + this.globalService.getTema();
    this.route.params.forEach(params => {
      if (params["id"]) {
        this.new = false;
        this.usuarioEditado._id = params["id"];
        this.usuarioEditado.nombre = params["nombre"];
        this.usuarioEditado.email = params["email"];
        this.antiguaClave = params["clave"];
        if(params["isAdmin"]=="true"){
          this.usuarioEditado.isAdmin = true;
        } else {
          this.usuarioEditado.isAdmin = false;
        }
        this.ready = true;
      } else {
        this.usuarioEditado.isAdmin = false;
        this.new = true;
        this.ready = true;
      }
    });
  }

  inicializaErrores(){
    this.errores.email= '';
    this.errores.nombre = '';
    this.errores.antiguaClave = '';
    this.errores.clave = '';
    this.errores.claveRepetida = '';
  }

  guardar() {
    if (this.compruebaFallos()) {
      this.usuarioEditado.clave = this.clave1;

      if (this.usuarioEditado._id) {
        this.actualizar();
      } else {
        this.crear();
      }
    }
  }

  actualizar() {
    this.dm.updateUsuario(this.usuarioEditado).then((res) => {
      let index = this.globalService.usuarios.indexOf(
        this.globalService.usuarios.find(x => x._id === this.usuarioEditado._id)
      );
      this.globalService.usuarios[index] = this.usuarioEditado;
      this.router.navigateByUrl('/usuarios');
    }).catch((err) => {
      console.log(err);
    });
  }

  crear() {
    this.dm.createUsuario(this.usuarioEditado).then((res) => {
      this.usuarioEditado._id = res._id;
      this.globalService.usuarios.push(this.usuarioEditado);
      this.router.navigateByUrl('/usuarios');
    }).catch((err) => {
      console.log(err);
    });
  }

  cambiarClave(){
    this.pass=true;
    setTimeout(() => {
      this.claseClave = '';
    }, 1);
  }
  

  tooltip(e) {
    let tooltips: NodeListOf<HTMLElement> = document.querySelectorAll('.texto_error span');
    let x = (e.clientX + 20) + 'px',
      y = (e.clientY + 20) + 'px';
    if (tooltips) {
      for (let i = 0; i < tooltips.length; i++) {
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;
      }
    }
  }

  compruebaAntiguaClave(){
    return this.usuarioEditado.oldClave == this.antiguaClave;
  }

  cambia(key) {
    switch (key) {
      case 'nombre':
        if (this.errores.nombre != '') {
          if (this.usuarioEditado.nombre) {
            this.errores.nombre = '';
          }
        }
        break;

      case 'antiguaClave':
        if (this.errores.antiguaClave != '') {
          if (this.usuarioEditado.oldClave) {
            this.errores.antiguaClave = '';
          }
        }
        break;

      case 'clave':
        if (this.clave1) {
          this.errores.clave = '';
          if(this.clave2){
            if(this.clave1!=this.clave2){
              this.errores.claveRepetida = 'distinta';
            } else {
              this.errores.claveRepetida = '';
            }
          }
        }
        break;

      case 'claveRepetida':
        if (this.clave2) {
          this.errores.claveRepetida = '';
          if(this.clave1){
            if(this.clave1!=this.clave2){
              this.errores.claveRepetida = 'distinta';
            }
          }
        }
        break;

      case 'email':
        if (this.errores.email != '') {
          if (this.usuarioEditado.email) {
            this.errores.email = '';
          }
        }
        break;

      default:
        break;
    }
  }


  compruebaFallos() {
    let res = true;
    if (!this.usuarioEditado.nombre) {
      this.errores.nombre = "obligatorio";
      res = false;
    }
    if (!this.usuarioEditado.email) {
      this.errores.email = "obligatorio";
      res = false;
    }
    if(this.new){
      if(!this.clave1){
        this.errores.clave = "obligatorio";
        res = false;
      }
      if(!this.clave2){
        this.errores.claveRepetida = "obligatorio";
        res = false;
      }
      if(this.clave1 && this.clave2){
        if(this.clave1 != this.clave2){
          this.errores.claveRepetida = "distinta";
          res = false;
        }
      }
    } else if(this.pass) {
      if(!this.usuarioEditado.oldClave){
        this.errores.antiguaClave = "obligatorio";
        res = false;
      }
      if(!this.clave1){
        this.errores.clave = "obligatorio";
        res = false;
      }
      if(!this.clave2){
        this.errores.claveRepetida = "obligatorio";
        res = false;
      }
      if(this.clave1 && this.clave2){
        if(this.clave1 != this.clave2){
          this.errores.claveRepetida = "distinta";
          res = false;
        }
      }
      if(this.usuarioEditado.oldClave){
        if(!this.compruebaAntiguaClave()){
          this.errores.antiguaClave = "distinta";
          res = false;
        }
      }
    }

    return res;
  }
}
