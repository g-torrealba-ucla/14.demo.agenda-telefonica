import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";
export default class Cl_vAgenda extends Cl_vGeneral {
    constructor() {
        super({ formName: "agenda" });
        this.btAgregarContacto = this.crearHTMLButtonElement("btAgregarContacto", {
            onclick: () => this.agregarContacto(),
        });
        this.divContactosRegistrados = this.crearHTMLElement("divContactosRegistrados", {
            type: tHTMLElement.CONTAINER,
            refresh: () => this.mostrarGruposRegistrados(),
        });
    }
    mostrarGruposRegistrados() {
        var _a;
        this.divContactosRegistrados.innerHTML = "";
        let agenda = (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.contactosRegistrados();
        if (!agenda)
            return;
        agenda.forEach((contacto) => {
            this.divContactosRegistrados.innerHTML += `<tr>
            <td>${contacto.nombre}</td>
            <td>${contacto.telefono}</td>
            <td>${contacto.correo}</td>
        </tr>`;
        });
    }
    agregarContacto() {
        let nombre = prompt("Ingrese el nombre del contacto:");
        if (!nombre)
            return;
        let telefono = prompt("Ingrese el teléfono:");
        if (!telefono)
            return;
        let correo = prompt("Ingrese el correo:");
        if (!correo)
            return;
        this.controlador.agregarContacto({
            contactoData: {
                nombre: nombre,
                telefono: telefono,
                correo: correo,
            },
            callback: (error) => {
                if (error)
                    alert(error);
                this.refresh();
            },
        });
    }
}
