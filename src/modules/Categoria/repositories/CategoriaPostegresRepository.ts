import { Pool } from "pg";
import { createConnection } from "../../../shared/database/connection";
import { ICategoriaRepository } from "./ICategoriaRepositories";
import { Categorias } from "../entities/Categoria";

class CategoriaPostgresRepository implements ICategoriaRepository {

    private client: Pool

    constructor() {

        createConnection().then((connection) => (this.client = connection));
    }
    async create({
        id_categorias,
        nome,
        descricao,
    }: Categorias): Promise<Categorias> {

        const { rows } = await this.client.query(`INSERT INTO categorias
        (id_categorias, nome, descricao)
        VALUES ($1, $2, $3)`,
            [id_categorias, nome, descricao]
        );
        const categoria = rows[0];

        return categoria;
        
    }


    async list(): Promise<Categorias[]> {
        const { rows } = await this.client.query(`SELECT * FROM categorias`);

        
        const categorias = rows;

        return categorias;
    }
  }

  export { CategoriaPostgresRepository };