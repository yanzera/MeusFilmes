import { DateTime } from "ionic-angular/umd/components/datetime/datetime";

export class Filme{
    id:number;
    titulo: string;
    direcao: string;
    descricao:string;
    genero:string;
    popularidade: number;
    lancamento: DateTime;
}