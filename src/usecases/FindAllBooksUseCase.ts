import { Book } from "../entities/Book";
import { BookRepository } from "../repositories/BookRepository";

export class FindAllBooksUseCase{
    constructor(private repository: BookRepository){}

    async execute(): Promise<Book[]>{
        return this.repository.findAll();
    }

}