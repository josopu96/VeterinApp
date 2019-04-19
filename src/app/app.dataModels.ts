export class Cliente {
  nombre: {
    type: String,
    required: true
  };
  apellidos: {
    type: String,
    required: true
  };
  direccion: {
    type: String,
    required: true
  };
  codPostal: {
    type: String,
    required: true
  };
  poblacion: {
    type: String,
    required: true
  };
  dni: {
    type: String,
    required: true
  };
  email: {
    type: String,
    required: true
  };
  fecNac: {
    type: Date,
    required: true
  };
  contactos: [{
    nombre: String,
    telefono: String,
    tipo: String
  }];
  facturas: [{
    numero: String,
    fecha: Date,
    importeTotal: Number,
    tipoPago: String,
    estado: String,
    porcentajeTarifa: Number,
    tratamientos: [{
      precio: String,
      concepto: String,
      id_tratamiento: String
    }];
    vacunas: [{
      precio: String,
      concepto: String,
      id_vacuna: String
    }];
    desparasitaciones: [{
      precio: Number,
      concepto: String,
      id_desparasitacion: String
    }];
    pruebas: [{
      precio: Number,
      concepto: String,
      id_prueba: String
    }];
    analiticas: [{
      precio: Number,
      concepto: String,
      id_analitica: String
    }];
    radiografias: [{
      precio: Number,
      concepto: String,
      id_radiografia: String
    }];
    itemFactura: [{
      cantidad: Number,
      precioVenta: String,
      iva: String,
      idProducto: String
    }];
  }];
}

export class Mascota {
  id: number;
  nombre: string;
}

export class Veterinario {
  id: number;
  nombre: string;
  apellido: string;
}

export class Usuario {
  id: string;
  nombre: string;
  email: string;
  isAdmin: boolean;
}
