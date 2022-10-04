import { Router } from "express";
import { bookController } from "./controllers/BookController";

const router = Router()

router.post('/books', (request, response) => {
    return bookController.save(request, response)
})

router.get('/books', (request, response) => {
    return bookController.findAll(request, response)
})

router.get('/books/:id', (request, response) => {
    return bookController.findById(request, response)
})

router.put('/books', (request, response) => {
    return bookController.update(request, response)
})

router.delete('/books/:id', (request, response) =>{
    return bookController.delete(request, response)
})

export { router }