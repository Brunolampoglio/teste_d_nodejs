import {v4 as uuid} from 'uuid';

class Endereco{
   id_enderecos: string;
   cep: string;
   logradouro: string;
    numero: string;
    bairro: string;
    cidade: string;
    estado: string;

    constructor(){
        if(!this.id_enderecos){
            this.id_enderecos = uuid();
        }
    }
}

export { Endereco };