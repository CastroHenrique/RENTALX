/* eslint-disable prettier/prettier */
import { ICategoriesRepository } from "../../repositories/category/ICategoriesRepositories";

interface IRequest {
    name: string;
    description: string;
}
class CreateCategoryService {
    constructor(private categoryRepository: ICategoriesRepository) { }

    execute({ name, description }: IRequest) {
        const categoryAlreadExists = this.categoryRepository.findByName(name);
        if (categoryAlreadExists) {
            throw new Error("Category already exists!");
        }

        this.categoryRepository.create({ name, description });
    }
}

export default CreateCategoryService;
