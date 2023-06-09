import { Category } from "../../model/Category";
// eslint-disable-next-line prettier/prettier
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepositories";

class PortgresCategoryRepository implements ICategoriesRepository {
    findByName(name: string): Category {
        console.log(name);
        return null;
    }
    list(): Category[] {
        return null;
    }
    create({ name, description }: ICreateCategoryDTO): void {
        console.log(name, description);
    }
}

export default PortgresCategoryRepository;
