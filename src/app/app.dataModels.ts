export class Global {
    usuarioId: string;
    recordarPass: Boolean;
  }
  export class Ajustes {
    _id: string;
    tamLetra: string;
    tema: string;
    recordatorio: number;
  }
  export class Analitica {
    _id: string;
    nombre: string;
    descripcion: string;
    resultado: string;
    fecha: Date;
  }
  export class Calendario {
    _id: string;
    visitas: Visita[];
  }
  export class Cliente {
    _id: string;
    nombre: string;
    apellidos: string;
    direccion: string;
    codPostal: number;
    poblacion: string;
    dni: string;
    email: string;
    fecNac: Date;
    contactos: Contacto[];
    facturas: Factura[];
    cuidados: Cuidado[];
    fecModificacion: Date;

    setFecModificacion(fecModificacion: Date){
      this.fecModificacion = new Date(fecModificacion);
    }
  }
  export class Clinica {
    _id: string;
    cif: string;
    nombre: string;
    direccion: string;
    telefono: string;
    movil: string;
    fax: string;
    poblacion: string;
    provincia: string;
    pais: string;
    codPostal: number;
    web: string;
    imagen: string;
    email: string;
    propietario: string;
    dniPropietario: string;
    veterinarios: Veterinario[];
    productos: Producto[];
  }
  export class Contacto {
    _id: string;
    nombre: string;
    telefono: string;
    tipo: string;
  }
  export class Cuidado {
      _id: string;
      fechaInicio: Date;
      fechaFin: Date;
      idMascota: string;
  }
  export class Desparasitacion {
    _id: string;
    fecha: Date;
    tipoDesparasitacion: string;
  }
  export class Factura {
    _id: string;
    numero: string;
    fecha: Date;
    importeTotal: number;
    tipoPago: string;
    estado: string;
    porcentajeTarifa: number;
    operaciones: Operacion[];
    itemsFactura: ItemFactura[];

    actualizaImporteTotal(){
      this.importeTotal = 0;
      for(let t of this.operaciones){
        this.importeTotal = this.importeTotal + t.precio;
      }
      for(let i of this.itemsFactura){
        this.importeTotal = this.importeTotal + i.precioVenta;
      }
      return this.importeTotal;
    }
  }
  export class ItemFactura {
    _id: string;
    cantidad: number;
    precioVenta: number;
    iva: number;
    idProducto: string;
  }
  export class Mascota {
    _id: string;
    nombre: string;
    chip: string;
    fecNac: Date;
    fecBaj: Date;
    sexo: string;
    estado: string;
    pelo: string;
    capa: string;
    especie: string;
    raza: string;
    analiticas: Analitica[];
    radiografias: Radiografia[];
    pruebas: Prueba[];
    desparasitaciones: Desparasitacion[];
    vacunas: Vacuna[];
    tratamientos: Tratamiento[];
    fecModificacion: Date;
  }
  export class Operacion {
    idOperacion: string;
    tipo: string;
    precio: number;
    concepto: string;
  }
  export class Producto {
    _id: string;
    nombre: string;
    precioCompra: number;
    precioVenta: number;
    indicaciones: string;
    stocks: Stock[];
  }
  export class Prueba {
    _id: string;
    concepto: string;
    categoria: string;
    tipoPrueba: string;
    fecha: Date;
    radiografias: Radiografia[];
  }
  export class Radiografia {
    _id: string;
    imagen: string;
    fecha: Date;
  }
  export class Receta {
    _id: string;
    fecha: Date;
    responsable: string;
    observaciones: string;
  }
  export class Stock {
    _id: string;
    lote: string;
    unidades: number;
    fecCompra: Date;
    fecCaducidad: Date;
  }
  export class Tarifa {
    _id: string;
    nombre: string;
    porcentaje: number;
  }
  export class TipoTratamiento {
    _id: string;
    nombre: string;
    dosis: string;
    hora: number;
    estado: boolean;
  }

  export class Tratamiento {
    _id: string;
    anamnesis: string;
    diagnostico: string;
    tipoTratamiento: TipoTratamiento;
    fecha: Date;
    receta: Receta;
    idVeterinario: string;
  }
  export class Usuario {
    _id: string;
    nombre: string;
    clave: string;
    isAdmin: boolean;
    email: string;
    ajustes: Ajustes;
  }
  export class Vacuna {
    _id: string;
    fecha: Date;
    tipoVacuna: string;
  }
  export class Veterinario {
    _id: string;
    nombre: string;
    apellidos: string;
    fecNac: Date;
    dni: string;
    telefono: string;
    numColegiado: number;
    borrado: boolean;
  }
  export class Visita {
    _id: string;
    descripcion: string;
    fecha: Date;
    idCliente: string;
  }
