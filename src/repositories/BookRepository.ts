import { DataBaseSource } from "../database/DataBase";
import { Book } from "../entities/Book";
import { IRepository } from "./IRepository";

export class BookRepository implements IRepository<Book, string>{
    private repository = DataBaseSource.getRepository(Book)

    save(book: Book): Promise<Book> {
        return this.repository.save(book)
    }
    update(book: Book): Promise<Book> {
        return this.repository.save(book)
    }
    findAll(): Promise<Book[]> {
        return this.repository.find()
    }
    findById(id: string): Promise<Book> {
        return this.repository.findOneBy({
            id: id
        })
    }
    findByTitle(title: string): Promise<Book> {
        return this.repository.findOneBy({
            title: title
        })
    }
    delete(book: Book): Promise<Book> {
        return this.repository.remove(book)
    }

}