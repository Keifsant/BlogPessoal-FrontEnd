import Postagem from "./Postagens";

export default interface Usuario {
    id?: number | null;
    nome: string;
    usuario: string;
    foto: string;
    senha: string;
    postagem?: Postagem[] | null;
}