export default class Cl_mAgenda {
    constructor() {
        this.agenda = [];
    }
    agregarContacto({ contacto, callback, }) {
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
    listar() {
        let lista = [];
        this.agenda.forEach((contacto) => {
            lista.push(contacto.toJSON());
        });
        return lista;
    }
}
