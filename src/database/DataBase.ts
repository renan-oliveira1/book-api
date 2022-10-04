import { DataSource } from "typeorm";
import { Book } from "../entities/Book";

export const DataBaseSource = new DataSource({
    type: 'sqlite',
    database: 'book-database.sqlite',
    synchronize: true,
    entities: [Book],
    subscribers: [],
    migrations: []
})