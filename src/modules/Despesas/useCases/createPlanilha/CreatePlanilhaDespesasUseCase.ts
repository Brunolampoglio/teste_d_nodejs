
import { IDespesasRepositories } from "../../repositories/IDespesasRepositories";

class CreatePlanilhaDespesasUseCase{
    constructor(
        private despesasRepository: IDespesasRepositories,
    ){}


    async execute(){
        const date = new Date();
        const dataInicial = new Date(date.getFullYear(), date.getMonth(), 1);
        const dataFinal = new Date(date.getFullYear(), date.getMonth() + 1, 0);


        const despesas = await this.despesasRepository.listByDate(dataInicial, dataFinal);

        const body = [];
        for await (let despesa of despesas) {

            let  { id, descricao_despesas, valor, data_compra, nome, tipo} = despesa;
            const rows = new Array();
            
            rows.push(id);
            rows.push(descricao_despesas);
            rows.push(valor);
            rows.push(data_compra.toLocaleDateString());
            rows.push(nome);
            rows.push(tipo);

            body.push(rows);
        }

        const xl = require('excel4node');
        const wb = new xl.Workbook();
        const ws = wb.addWorksheet('Despesas');

        const titulos = ['ID', 'Descrição', 'Valor', 'Data', 'Nome', 'Tipo'];

        let linha = 1;

        titulos.forEach((titulo) => {
            ws.cell(1, linha++).string(titulo);
        });

        let linha2 = 2;

        body.forEach(record => {
            let coluna = 1;
            Object.keys(record).forEach(ColumnName => {
                ws.cell(linha2, coluna++).string(record[ColumnName]);
            });
            linha2++;
        });

        wb.write('Despesas.xlsx');

        return {
            "sucess": true,
        }
    }
}
export { CreatePlanilhaDespesasUseCase }