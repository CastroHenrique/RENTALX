/* eslint-disable prettier/prettier */
// eslint-disable-next-line import-helpers/order-imports
import { Request, Response } from "express";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

export class ListCategoryController {
    constructor(private categoryRepository: ListCategoryUseCase) { }
    handle(req: Request, res: Response) {
        const all = this.categoryRepository.execute();
        return res.json(all);
    }
}
