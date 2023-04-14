import { TDocumentDefinitions } from "pdfmake/interfaces";
import { IDespesasRepositories } from "../../repositories/IDespesasRepositories";
import PdfPrinter from "pdfmake";

import fs from 'fs'; 


export interface ICreatePdfDespesasDTO{
    dataInicial: Date;
    dataFinal: Date;
}


class CreatePdfDespesasUseCase {
    constructor(
        private despesasRepository: IDespesasRepositories,
    ){}
    async execute({
        dataInicial,
        dataFinal,
    }: ICreatePdfDespesasDTO){

        
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

        const  fonts = {
            Helvetica: {
              normal: 'Helvetica',
              bold: 'Helvetica-Bold',
              italics: 'Helvetica-Oblique',
              bolditalics: 'Helvetica-BoldOblique'
            }
        };

        const printer = new PdfPrinter(fonts);

        const docDefinition: TDocumentDefinitions = {
            defaultStyle: { font: 'Helvetica' },
            content: [
                {
                table: {
                    body:[ 
                    ["ID", "Descrição", "Valor", "Data", "Categoria", "Tipo de Pagamento",],
                    ...body
                    ]
                }
            },
            ],
        }

        const pdfDoc = printer.createPdfKitDocument(docDefinition);

       pdfDoc.pipe(fs.createWriteStream('despesas.pdf'));

       pdfDoc.end();

       return {
              "success": true,
       }

    }


}
export { CreatePdfDespesasUseCase }