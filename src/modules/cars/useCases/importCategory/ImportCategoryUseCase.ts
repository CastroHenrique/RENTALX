/* eslint-disable import/no-extraneous-dependencies */
import { parse } from "csv-parse";
import fs from "fs";

export class ImportCategoryUseCase {
    execute(file: Express.Multer.File): void {
        const stream = fs.createReadStream(file.path);

        const parseFile = parse();

        stream.pipe(parseFile);

        parseFile.on("data", async (line) => {
            console.log(line);
        });
    }
}