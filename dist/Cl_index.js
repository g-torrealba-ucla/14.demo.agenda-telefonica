/**
 * Se requiere de una pequeña aplicación que controle una agenda
 * telefónica, permitiendo registrar los datos de los contactos:
 * nombre, teléfono y correo.
 * Se sabe que los números de teléfonos comienzan según la operadora:
 * 0412, 0422, 0416, 0426, 0414, 0424, y además tienen una longitud
 * total de 11 dígitos
 * Para el correo debe verificarse que sea una dirección correcta:
 * - Tiene un nombre de usuario, que no puede ser vacío
 * - Tiene un dominio, que incluye el nombre del servidor y dominio
 *   de nivel superior (separados por un punto)
 * - Los separa el carácter @ (arroba)
 * - Ejemplos: mariangela@gmail.com

 * La APP debe permitir agregar y listar los contactos registrados.
 * - Los teléfonos no deben repetirse en la agenda.
 * - Los 3 datos son obligatorios en cada contacto.
 */
import Cl_controlador from "./Cl_controlador.js";
import Cl_mAgenda from "./Cl_mAgenda.js";
import Cl_vAgenda from "./Cl_vAgenda.js";
export default class Cl_index {
    constructor() {
        this.modelo = new Cl_mAgenda();
        this.vista = new Cl_vAgenda();
        let controlador = new Cl_controlador(this.modelo, this.vista);
        this.vista.controlador = controlador;
        this.vista.refresh();
    }
}
