import {Contacto} from "./models/contacto";
import {Operacion} from "./models/operacion";
import {ItemFactura} from "./models/itemFactura";
import {Factura} from "./models/factura"

export class Cliente {
  _id: string;
  nombre: string;
  apellidos: string;
  direccion: string;
  codPostal: string;
  poblacion: string;
  dni: string;
  email: string;
  fecNac: Date;
  contactos: Contacto[];
  facturas: Factura[];
}


export class Mascota {
  _id: string;
  nombre: string;
}

export class Veterinario {
  _id: string;
  nombre: string;
  apellido: string;
}

export class Usuario {
  id: string;
  nombre: string;
  email: string;
  isAdmin: boolean;
}
