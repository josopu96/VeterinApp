import { Cliente, Veterinario, Mascota } from './app.dataModels';

export const CLIENTES: Cliente[] = [
    { id: 0, nombre: 'Sin Cliente', apellido: "" },
    { id: 11, nombre: 'Javier', apellido: "Rodríguez" },
    { id: 12, nombre: 'Jose Daniel', apellido: "Solano" },
    { id: 13, nombre: 'Jose Antonio', apellido: "Parejo" }
];
export const VETERINARIOS: Veterinario[] = [
    { id: 0, nombre: 'Sin Veterinario', apellido: "" },
    { id: 21, nombre: 'Ángel', apellido: "Ristori" },
    { id: 22, nombre: 'Toñi', apellido: "Gallego" }
];
export const MASCOTAS: Mascota[] = [
    { id: 0, nombre: 'Sin Mascota' },
    { id: 31, nombre: 'Toby' },
    { id: 32, nombre: 'Pongo' },
    { id: 33, nombre: 'Duna' },
    { id: 34, nombre: 'Blaki' }
];