/* eslint-disable prettier/prettier */
import { CategoriesRepository } from "../../repositories/category/CategoriesRepository";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

const categoriesRepository = new CategoriesRepository();

const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);

const listCategoryController = new ListCategoryController(listCategoryUseCase);

export { listCategoryController, listCategoryUseCase };