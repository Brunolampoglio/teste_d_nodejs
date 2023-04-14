import { Request, Response } from "express";
import { ListAllCategoriaUseCase } from "./ListCategoriaUseCase";

class ListAllCategoriaController {
    constructor(private listAllCategoriaUseCase: ListAllCategoriaUseCase) {}
    
    async handle(request: Request, response: Response): Promise<Response> {
        const all = await this.listAllCategoriaUseCase.execute();
        return response.json(all);
    }

}
export { ListAllCategoriaController }