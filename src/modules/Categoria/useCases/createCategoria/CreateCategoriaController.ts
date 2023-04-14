import { Request, Response } from "express";
import { CreateCategoriaUseCase } from "./CreateCategoriaUseCase";


class CreateCategoriaController {
    constructor(private createCategoriaUseCase: CreateCategoriaUseCase) {}

    async handle(request: Request, response: Response) {
        
        const { nome, descricao } = request.body;
        const categoria = await this.createCategoriaUseCase.execute({
            nome,
            descricao,
        });
        return response.json(categoria);
    }
}

export { CreateCategoriaController }