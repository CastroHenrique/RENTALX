import { Router } from "express";

import { createSpecificationsControllers } from "../modules/cars/useCases/createSpecification";

const specificationRoutes = Router();

specificationRoutes.post("/", (request, response) => {
    return createSpecificationsControllers.handle(request, response);
});

export { specificationRoutes };
