export class FiltroCliente {
  nombre: string;
  apellidos: string;
  dni: string;
  telefono: string;
  morosos: boolean;
  citados: boolean;
  porMascota: boolean;
  atendidos: boolean;
}
export class FiltroMascota {
  nombre: string;
  chip: string;
  raza: string;
  edad: number;
  pelo: string;
  especie: string;
  sexo: string;
  atendidas: boolean;
  porCliente: boolean;
}
export class FiltroVeterinario {
  nombre: string;
  apellidos: string;
  dni: string;
}