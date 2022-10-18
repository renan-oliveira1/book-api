import { Request, Response } from "express";
import { deleteBookUseCase, findAllBooksUseCase, findBookByIdUseCase, saveBookUseCase, updateBookUseCase } from "../usecases/BookUseCase";

class BookController{
    
    async save(request: Request, response: Response): Promise<Response>{
        try {
            const result = await saveBookUseCase.execute(request.body)

            return response.status(201).send(result);
        }catch (error) {
            return response.status(400).json(error)
        }       
    }

    async findAll(request: Request, response: Response): Promise<Response>{
        try {
            const result = await findAllBooksUseCase.execute()

            return response.status(201).send(result);
        }catch (error) {
            return response.status(400).json(error)
        }       
    }

    async findById(request: Request, response: Response): Promise<Response>{
        try{
            const result = await findBookByIdUseCase.execute(request.params.id)

            return response.status(201).send(result)
        }catch(error){
            return response.status(400).json(error)
        }
    }

    async update(request: Request, response: Response): Promise<Response>{
        try{
            const result = await updateBookUseCase.execute(request.body)
            
            return response.status(201).send(result)
        }catch(error){
            return response.status(400).json(error)
        }
    }

    async delete(request: Request, response: Response): Promise<Response>{
        try{
            const result = await deleteBookUseCase.execute(request.params.id)
            
            return response.status(201).send(result)
        }catch(error){
            return response.status(400).json(error)
        }
    }

}

const bookController = new BookController()

export{
    bookController
}