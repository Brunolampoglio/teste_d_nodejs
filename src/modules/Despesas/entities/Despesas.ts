import {v4 as uuid} from 'uuid';


class Despesas {
    id: string;
    descricao_despesas: string;
    valor: number;
    data_compra: Date;
    tipo_pagamento_id: number;
    categoria_id: number;
    endereco_id: number;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { Despesas };