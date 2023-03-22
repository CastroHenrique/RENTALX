import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/specification/SpecificationsRepository";
import CreateSpecificationsService from "../modules/cars/services/specifications/create";

const specificationRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationRoutes.post("/", (request, response) => {
    const { name, description } = request.body;
    const createSpecificationsService = new CreateSpecificationsService(
        specificationsRepository
    );
    createSpecificationsService.execute({ name, description });
    return response.status(201).send();
});

export { specificationRoutes };
