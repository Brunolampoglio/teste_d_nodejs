import { Pool } from "pg";


import { createConnection } from "../../../shared/database/connection";
import { IEnderecoRepositories } from "./IEnderecoRepositories";
import { Endereco } from "../entities/Endereco";

class EnderecoPostgresRepository implements IEnderecoRepositories {

    private client: Pool

    constructor() {

        createConnection().then((connection) => (this.client = connection));
    }

  async create({
    id_enderecos,
    cep,
    logradouro,
    bairro,
    cidade,
    estado,
    numero,
  }: Endereco): Promise<Endereco> {
    const { rows } = await this.client.query(
        `INSERT INTO enderecos
        (id_enderecos, cep, logradouro, bairro, cidade, estado, numero)
        VALUES ($1, $2, $3, $4, $5, $6, $7)`,
        [id_enderecos, cep, logradouro,  bairro, cidade, estado, numero]
    );

    const endereco = rows[0];

    return endereco;
  }
}

export { EnderecoPostgresRepository };