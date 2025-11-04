import Cl_mContacto, { iContacto } from "./Cl_mContacto.js";

export default class Cl_mAgenda {
  private agenda: Cl_mContacto[] = [];
  agregarContacto({
    contacto,
    callback,
  }: {
    contacto: Cl_mContacto;
    callback: (error: string | false) => void;
  }): void {
    // Validar que el contacto no tenga errores
    let error = contacto.error();
    if (error) {
      callback(error);
      return;
    }
    // Validar que no se repita el teléfono
    let existe = this.agenda.find((c) => c.telefono === contacto.telefono);
    if (existe) {
      callback("El número de teléfono ya está registrado.");
      return;
    }
    this.agenda.push(contacto);
    callback(false);
  }
  listar(): iContacto[] {
    let lista: iContacto[] = [];
    this.agenda.forEach((contacto) => {
      lista.push(contacto.toJSON());
    });
    return lista;
  }
}
