import { MessageDTO } from "../dto/MessageDTO";
import { BookRepository } from "../repositories/BookRepository";

export class DelteBookUseCase{
    constructor(private repository: BookRepository){}

    async execute(id: string){
        const bookExists = await this.repository.findById(id)

        if(!bookExists){
            throw await new MessageDTO("Book doesn't exists!!")
        }

        return this.repository.delete(bookExists)
    }
}