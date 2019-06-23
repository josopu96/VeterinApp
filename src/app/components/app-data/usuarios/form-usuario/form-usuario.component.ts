import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../app.dataModels';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../../../../services/globalService';
import { DataManagement } from '../../../../services/dataManagement';

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
  clave1 = "";
  clave2 = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private globalService: GlobalService,
    private dm: DataManagement
  ) { }

  ngOnInit() {
    this.tema = "_" + this.globalService.getTema();
    this.route.params.forEach(params => {
      if (params["id"]) {
        this.new = false;
        this.usuarioEditado._id = params["id"];
        this.usuarioEditado.nombre = params["nombre"];
        this.usuarioEditado.email = params["email"];
        this.usuarioEditado.isAdmin = params["isAdmin"];
        this.ready = true;
      } else {
        this.usuarioEditado.isAdmin = false;
        this.new = true;
        this.ready = true;
      }
    });
  }

  guardar() {
    if (this.checkPasswordEquals) {
      this.usuarioEditado.clave = this.clave1;
    }

    if (this.usuarioEditado._id) {
      this.actualizar();
    } else {
      this.crear();
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

  checkFormIsFullfilled() {
    let disabled = true;

    if (!this.new) {
      if (this.usuarioEditado.nombre && this.usuarioEditado.email && this.checkPasswordEquals()) {
        disabled = false;
      }
    } else {
      if (this.usuarioEditado.nombre && this.usuarioEditado.email && this.usuarioEditado.clave && this.checkPasswordEquals()) {
        disabled = false;
      }
    }

    return disabled;
  }

  checkPasswordEquals(): boolean {
    let res = false;
    if (this.clave1 || this.clave2) {
      if (this.clave1 == this.clave2) {
        this.usuarioEditado.clave = this.clave1;
        res = true;
      }
    } else if (!this.clave1 && !this.clave2) {
      res = true;
    }

    return res;
  }
}
