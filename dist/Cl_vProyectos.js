import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";
export default class Cl_vAgenda extends Cl_vGeneral {
  constructor() {
    super({ formName: "negocios" });
    this.btAgregarContacto = this.crearHTMLButtonElement("btAgregarContacto", {
      onclick: () => this.agregarContacto(),
    });
    this.divContactosRegistrados = this.crearHTMLElement(
      "divContactosRegistrados",
      {
        type: tHTMLElement.CONTAINER,
        refresh: () => this.mostrarGruposRegistrados(),
      }
    );
  }
  mostrarGruposRegistrados() {
    var _a;
    this.divContactosRegistrados.innerHTML = "";
    let grupos =
      (_a = this.controlador) === null || _a === void 0
        ? void 0
        : _a.gruposRegistrados();
    if (!grupos) return;
    grupos.forEach((grupo) => {
      this.divContactosRegistrados.innerHTML += `<tr>
            <td>${grupo.nombre}</td>
            <td>${grupo.cedula1}</td>
            <td>${grupo.cedula2}</td>
            <td>${grupo.cedula3 ? grupo.cedula3 : ""}</td>
        </tr>`;
    });
  }
  agregarContacto() {
    let nombre = prompt("Ingrese el nombre del grupo:");
    if (!nombre) return;
    let cedula1 = prompt("Ingrese la cédula 1:");
    if (!cedula1) return;
    let cedula2 = prompt("Ingrese la cédula 2:");
    if (!cedula2) return;
    let cedula3 = prompt("Ingrese la cédula 3 (opcional):");
    this.controlador.agregarContacto({
      contactoData: {
        nombre: nombre,
        cedula1: +cedula1,
        cedula2: +cedula2,
        cedula3: cedula3 ? +cedula3 : null,
      },
      callback: (error) => {
        if (error) alert(error);
        this.refresh();
      },
    });
  }
}
