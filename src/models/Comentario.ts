import { Usuario } from "./usuario";

export class Comentario {
    static contador=0;
    id: number;
    texto: string;
    fecha: Date;
    usuario: Usuario;

    constructor(texto: string, fecha: Date, usuario: Usuario) {
        this.id = Comentario.contador++;
        this.texto = texto;
        this.fecha = fecha;
        this.usuario = usuario;
    }

    // Getters and Setters
    getId(): number {
        return this.id;
    }

    setId(value: number): void {
        this.id = value;
    }

    getTexto(): string {
        return this.texto;
    }

    setTexto(value: string): void {
        this.texto = value;
    }

    getFecha(): Date {
        return this.fecha;
    }

    setFecha(value: Date): void {
        this.fecha = value;
    }

    getUsuario(): Usuario {
        return this.usuario;
    }

    setUsuario(value: Usuario): void {
        this.usuario = value;
    }
}

