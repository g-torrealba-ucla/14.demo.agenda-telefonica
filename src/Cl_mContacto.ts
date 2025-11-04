export interface iContacto {
  nombre: string;
  telefono: string;
  correo: string;
}
export default class Cl_mContacto {
  private _nombre: string = "";
  private _telefono: string = "";
  private _correo: string = "";
  constructor({
    nombre,
    telefono,
    correo,
  }: {
    nombre: string;
    telefono: string;
    correo: string;
  }) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.correo = correo;
  }
  set nombre(nombre: string) {
    this._nombre = nombre.trim().toUpperCase();
  }
  get nombre(): string {
    return this._nombre;
  }
  set telefono(telefono: string) {
    this._telefono = telefono.trim();
  }
  get telefono(): string {
    return this._telefono;
  }
  set correo(correo: string) {
    this._correo = correo.trim().toLowerCase();
  }
  get correo(): string {
    return this._correo;
  }
  error(): string | false {
    // Validar nombre
    if (this._nombre.length === 0) return "El nombre no puede estar vacío.";
    // Validar teléfono
    const operadores = ["0412", "0422", "0416", "0426", "0414", "0424"];
    if (
      this._telefono.length !== 11 || // 04147894563
      !operadores.includes(this._telefono.substring(0, 4)) ||
      isNaN(+this._telefono)
    ) {
      return "El teléfono es inválido.";
    }
    return false;
  }
  toJSON(): iContacto {
    return {
      nombre: this._nombre,
      telefono: this._telefono,
      correo: this._correo,
    };
  }
}
