/* eslint-disable prettier/prettier */
import { ICategoriesRepository } from "../../repositories/ICategoriesRepositories";

export class CreateCategoryUseCase {
    constructor(private categoryRepository: ICategoriesRepository) { }

    execute(name: string, description: string) {
        const categoryAlreadExists = this.categoryRepository.findByName(name);
        if (categoryAlreadExists) {
            throw new Error("Category already exists!");
        }

        this.categoryRepository.create({ name, description });
    }
}
