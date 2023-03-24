/* eslint-disable prettier/prettier */
import { Category } from "../../model/Category";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

export class ListCategoryUseCase {
    constructor(private categoriesRepository: CategoriesRepository) { }

    execute(): Category[] {
        const categories = this.categoriesRepository.list();
        return categories;
    }
}
