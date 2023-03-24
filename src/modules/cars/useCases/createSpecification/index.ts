/* eslint-disable import-helpers/order-imports */
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationsUseCase } from "./CreateSpecificationUseCase";
import { CreateSpecificationController } from "./CreateSpecificationController";

const specificationsRepository = new SpecificationsRepository();

const createSpecificationsUseCase = new CreateSpecificationsUseCase(
    specificationsRepository
);

const createSpecificationsControllers = new CreateSpecificationController(
    createSpecificationsUseCase
);

export { createSpecificationsControllers, createSpecificationsUseCase };
