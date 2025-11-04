export default class Cl_mContacto {
    constructor({ nombre, telefono, correo, }) {
        this._nombre = "";
        this._telefono = "";
        this._correo = "";
        this.nombre = nombre;
        this.telefono = telefono;
        this.correo = correo;
    }
    set nombre(nombre) {
        this._nombre = nombre.trim().toUpperCase();
    }
    get nombre() {
        return this._nombre;
    }
    set telefono(telefono) {
        this._telefono = telefono.trim();
    }
    get telefono() {
        return this._telefono;
    }
    set correo(correo) {
        this._correo = correo.trim().toLowerCase();
    }
    get correo() {
        return this._correo;
    }
    error() {
        // Validar nombre
        if (this._nombre.length === 0)
            return "El nombre no puede estar vacío.";
        // Validar teléfono
        const operadores = ["0412", "0422", "0416", "0426", "0414", "0424"];
        if (this._telefono.length !== 11 || // 04147894563
            !operadores.includes(this._telefono.substring(0, 4)) ||
            isNaN(+this._telefono)) {
            return "El teléfono es inválido.";
        }
        return false;
    }
    toJSON() {
        return {
            nombre: this._nombre,
            telefono: this._telefono,
            correo: this._correo,
        };
    }
}
