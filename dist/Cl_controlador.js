import Cl_mContacto from "./Cl_mContacto.js";
export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    agregarContacto({ contactoData, callback, }) {
        this.modelo.agregarContacto({
            contacto: new Cl_mContacto(contactoData),
            callback: (error) => {
                callback(error);
            },
        });
    }
    contactosRegistrados() {
        return this.modelo.listar();
    }
}
