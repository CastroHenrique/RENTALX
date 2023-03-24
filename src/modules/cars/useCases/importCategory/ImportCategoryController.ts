/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

export class ImportCategoryController {
    constructor(private importCategoryUseCase: ImportCategoryUseCase) { }
    handle(req: Request, res: Response): Response {
        const { file } = req;
        console.log(file);
        return res.send();
    }
}
