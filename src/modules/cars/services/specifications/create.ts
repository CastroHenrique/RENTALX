import { ISpecificationsRepository } from "../../repositories/specification/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}
class CreateSpecificationsService {
    // eslint-disable-next-line prettier/prettier
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
export default CreateSpecificationsService;
