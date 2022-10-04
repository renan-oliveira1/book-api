import { MessageDTO } from "../dto/MessageDTO";
import { Book } from "../entities/Book";
import { BookRepository } from "../repositories/BookRepository";


export class SaveBookUseCase{
    constructor(private repository: BookRepository){}

    async execute(data: Book): Promise<MessageDTO>{
        const bookAlreadyExists = await this.repository.findByTitle(data.title)

        if(bookAlreadyExists){
            throw await new MessageDTO("Book already saved!!")
        }

        this.repository.save(data)

        return await new MessageDTO("Book save sucessfully!!")

    }
}