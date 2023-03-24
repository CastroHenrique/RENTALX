/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { CreateSpecificationsUseCase } from "./CreateSpecificationUseCase";

export class CreateSpecificationController {
    constructor(private createSpecification: CreateSpecificationsUseCase) { }

    handle(req: Request, res: Response): Response {
        const { name, description } = req.body;

        this.createSpecification.execute({ name, description });

        return res.status(201).send();
    }
}
