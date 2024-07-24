import { Foto } from "./Foto";

export class Usuario {
    nombreUsuario: string;
    email: string;
    password: string;
    fechaRegistro: Date;
    fotoPerfil: string;
    seguidores: Usuario[];
    siguiendo: Usuario[];
    fotosSubidas: Foto[];

    constructor(
        nombreUsuario: string,
        email: string,
        password: string,
        fechaRegistro: Date,
        fotoPerfil: string,
        seguidores: Usuario[] = [],
        siguiendo: Usuario[] = [],
        fotosSubidas: Foto[] = []
    ) {
        this.nombreUsuario = nombreUsuario;
        this.email = email;
        this.password = password;
        this.fechaRegistro = fechaRegistro;
        this.fotoPerfil = fotoPerfil;
        this.seguidores = seguidores;
        this.siguiendo = siguiendo;
        this.fotosSubidas = fotosSubidas;
    }

    // Getters and Setters
    getNombreUsuario(): string {
        return this.nombreUsuario;
    }

    setNombreUsuario(value: string): void {
        this.nombreUsuario = value;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(value: string): void {
        this.email = value;
    }

    getPassword(): string {
        return this.password;
    }

    setPassword(value: string): void {
        this.password = value;
    }

    getFechaRegistro(): Date {
        return this.fechaRegistro;
    }

    setFechaRegistro(value: Date): void {
        this.fechaRegistro = value;
    }

    getFotoPerfil(): string {
        return this.fotoPerfil;
    }

    setFotoPerfil(value: string): void {
        this.fotoPerfil = value;
    }

    getSeguidores(): Usuario[] {
        return this.seguidores;
    }

    setSeguidores(value: Usuario[]): void {
        this.seguidores = value;
    }

    getSiguiendo(): Usuario[] {
        return this.siguiendo;
    }

    setSiguiendo(value: Usuario[]): void {
        this.siguiendo = value;
    }

    getFotosSubidas(): Foto[] {
        return this.fotosSubidas;
    }

    setFotosSubidas(value: Foto[]): void {
        this.fotosSubidas = value;
    }
}
