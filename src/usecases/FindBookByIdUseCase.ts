import { MessageDTO } from "../dto/MessageDTO";
import { Book } from "../entities/Book";
import { BookRepository } from "../repositories/BookRepository";


export class FindBookByIdUseCase{
    constructor(private repository: BookRepository){}

    async execute(id: string): Promise<Book>{
        const book = await this.repository.findById(id)

        if(!book){
            throw await new MessageDTO("Book already saved!!")
        }

        return book
    }
}