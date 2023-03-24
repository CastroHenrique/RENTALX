/* eslint-disable prettier/prettier */
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

export class CreateSpecificationsUseCase {
    constructor(private specificatioRepository: ISpecificationsRepository) { }

    execute({ name, description }: IRequest): void {
        // eslint-disable-next-line prettier/prettier
        const specificationAlreadyExists = this.specificatioRepository.findByName(name);
        if (specificationAlreadyExists) {
            throw new Error("Specification already exists!");
        }
        this.specificatioRepository.create({ name, description });
    }
}
