interface IViaCepResponse{
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
}


interface IViaCepProvider{
    getAddress(cep: string): Promise<IViaCepResponse>;
}