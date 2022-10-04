import { Repository } from "typeorm";
import { BookRepository } from "../repositories/BookRepository";
import { DelteBookUseCase } from "./DeleteBookUseCase";
import { FindAllBooksUseCase } from "./FindAllBooksUseCase";
import { FindBookByIdUseCase } from "./FindBookByIdUseCase";
import { SaveBookUseCase } from "./SaveBookUseCase";
import { UpdateBookUseCase } from "./UpdateBookUseCase";

const bookRepository = new BookRepository()

const saveBookUseCase = new SaveBookUseCase(bookRepository)
const findAllBooksUseCase = new FindAllBooksUseCase(bookRepository)
const findBookByIdUseCase = new FindBookByIdUseCase(bookRepository)
const updateBookUseCase = new UpdateBookUseCase(bookRepository)
const deleteBookUseCase = new DelteBookUseCase(bookRepository)

export{
    saveBookUseCase,
    findAllBooksUseCase,
    findBookByIdUseCase,
    updateBookUseCase,
    bookRepository,
    deleteBookUseCase
}