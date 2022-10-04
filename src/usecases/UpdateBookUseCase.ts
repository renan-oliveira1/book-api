import { MessageDTO } from "../dto/MessageDTO";
import { Book } from "../entities/Book";
import { BookRepository } from "../repositories/BookRepository";

export class UpdateBookUseCase{
    constructor(private repository: BookRepository){}

    async execute(book: Book): Promise<Book>{
        const bookExists = await this.repository.findById(book.id)

        if(!bookExists){
            throw await new MessageDTO("Book doesn't saved!!")
        }

        return this.repository.update(book)
    }
}