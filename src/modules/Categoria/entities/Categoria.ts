import {v4 as uuid} from 'uuid';

class Categorias {
    id_categorias: string;
    descricao: string;
    nome: string;

    constructor(){
        if(!this.id_categorias){
            this.id_categorias = uuid();
        }
    }
}
export { Categorias }