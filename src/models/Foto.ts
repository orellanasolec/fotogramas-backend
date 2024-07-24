import { Usuario } from "./usuario";
import { Comentario } from "./Comentario";

export class Foto {
    static contador=0;
    id: number;
    ruta: string;
    descripcion: string;
    hashtags: string[];
    fechaSubida: Date;
    usuario: Usuario;
    meGusta: Usuario[];
    comentarios: Comentario[];

    constructor(
        ruta: string,
        descripcion: string,
        hashtags: string[] = [],
        fechaSubida: Date,
        usuario: Usuario,
        meGusta: Usuario[] = [],
        comentarios: Comentario[] = []
    ) {
        this.id = Foto.contador++;
        this.ruta = ruta;
        this.descripcion = descripcion;
        this.hashtags = hashtags;
        this.fechaSubida = fechaSubida;
        this.usuario = usuario;
        this.meGusta = meGusta;
        this.comentarios = comentarios;
    }

    // Getters and Setters
    getId(): number {
        return this.id;
    }

    setId(value: number): void {
        this.id = value;
    }

    getRuta(): string {
        return this.ruta;
    }

    setRuta(value: string): void {
        this.ruta = value;
    }

    getDescripcion(): string {
        return this.descripcion;
    }

    setDescripcion(value: string): void {
        this.descripcion = value;
    }

    getHashtags(): string[] {
        return this.hashtags;
    }

    setHashtags(value: string[]): void {
        this.hashtags = value;
    }

    getFechaSubida(): Date {
        return this.fechaSubida;
    }

    setFechaSubida(value: Date): void {
        this.fechaSubida = value;
    }

    getUsuario(): Usuario {
        return this.usuario;
    }

    setUsuario(value: Usuario): void {
        this.usuario = value;
    }

    getMeGusta(): Usuario[] {
        return this.meGusta;
    }

    setMeGusta(value: Usuario[]): void {
        this.meGusta = value;
    }

    getComentarios(): Comentario[] {
        return this.comentarios;
    }

    setComentarios(value: Comentario[]): void {
        this.comentarios = value;
    }
}
