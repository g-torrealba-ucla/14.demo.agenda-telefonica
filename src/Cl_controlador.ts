import Cl_mContacto, { iContacto } from "./Cl_mContacto.js";
import Cl_mAgenda from "./Cl_mAgenda.js";
import Cl_vAgenda from "./Cl_vAgenda.js";

export default class Cl_controlador {
  public modelo: Cl_mAgenda;
  public vista: Cl_vAgenda;
  constructor(modelo: Cl_mAgenda, vista: Cl_vAgenda) {
    this.modelo = modelo;
    this.vista = vista;
  }
  agregarContacto({
    contactoData,
    callback,
  }: {
    contactoData: iContacto;
    callback: Function;
  }): void {
    this.modelo.agregarContacto({
      contacto: new Cl_mContacto(contactoData),
      callback: (error: string | false) => {
        callback(error);
      },
    });
  }
  contactosRegistrados(): iContacto[] {
    return this.modelo.listar();
  }
}
