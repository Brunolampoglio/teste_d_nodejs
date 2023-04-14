import { Pool } from "pg";
import { Despesas } from "../entities/Despesas";
import { IDespesasRepositories } from "./IDespesasRepositories";

import { createConnection } from "../../../shared/database/connection";

class DespesasPostgresRepository implements IDespesasRepositories {

    private client: Pool

    constructor() {

        createConnection().then((connection) => (this.client = connection));
    }
    async create({
        id,
        descricao_despesas,
        data_compra,
        valor,
        categoria_id,
        tipo_pagamento_id,
        endereco_id,
    }: Despesas): Promise<Despesas> {
       const { rows }  = await this.client.query(`INSERT INTO despesas 
        (id, descricao_despesas, valor, data_compra, tipo_pagamento_id, categoria_id, endereco_id) 
        VALUES ($1, $2, $3, $4, $5, $6, $7)`, 
        [id, descricao_despesas, valor, data_compra, tipo_pagamento_id, categoria_id, endereco_id]
        );

        const despesa = rows[0];

        return despesa;
    }


    async list(page: number, limit: number): Promise<Despesas[]> {
        const { rows } = await this.client.query(`
        SELECT * FROM despesas
        LEFT JOIN categorias
            ON categorias.id_categorias = despesas.categoria_id
        LEFT JOIN tipo_pagamentos
            ON tipo_pagamentos.id_tipo_pagamentos = despesas.tipo_pagamento_id 
        LEFT JOIN enderecos
            ON enderecos.id_enderecos = despesas.endereco_id
        LIMIT $1
        OFFSET($2 - 1) * $1`, [limit, page]);

        const despesas = rows;

        return despesas;
    }

    async listByDate(dataInicial: Date, dataFinal: Date): Promise<Despesas[]> {

        console.log(dataInicial, dataFinal);
        const { rows } = await this.client.query(
        `SELECT * FROM despesas 
        LEFT JOIN categorias
            ON categorias.id_categorias = despesas.categoria_id
        LEFT JOIN tipo_pagamentos
            ON tipo_pagamentos.id_tipo_pagamentos = despesas.tipo_pagamento_id
            LEFT JOIN enderecos
            ON enderecos.id_enderecos = despesas.endereco_id
        WHERE data_compra >= $1 AND data_compra <= $2 ORDER BY data_compra DESC`, [dataInicial, dataFinal]);       
        
        const despesas = rows;

        return despesas;
    }


    async findById(id: string): Promise<Despesas> {
        const { rows } = await this.client.query(`
        SELECT * FROM despesas
        WHERE id = $1`, [id]);

        const despesa = rows[0];

        return despesa;
    }

    async update({
        id,
        descricao_despesas,
        data_compra,
        valor,
        categoria_id,
        tipo_pagamento_id,
    }: Despesas): Promise<Despesas> {
        const { rows } = await this.client.query(`
        UPDATE despesas SET descricao_despesas = $1, valor = $2, data_compra = $3, tipo_pagamento_id = $4, categoria_id = $5 WHERE id = $6`, 
        [descricao_despesas, valor, data_compra, tipo_pagamento_id, categoria_id, id]);

        const despesa = rows[0];

        return despesa;
    }

    async updateValor(id: string, valor: number): Promise<Despesas> {
        const { rows } = await this.client.query(
            `UPDATE despesas SET valor = $1 WHERE id = $2`, [valor, id]);

        const despesa = rows[0];

        return despesa;
    }

    async delete(id: string): Promise<void> {
        await this.client.query(
        `DELETE FROM despesas WHERE id = $1`, [id]);
    }
}
export { DespesasPostgresRepository };