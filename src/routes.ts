import { Router } from "express";
import { bookController } from "./controllers/BookController";

const router = Router()

router.post('', (request, response) => {
    return bookController.save(request, response)
})

router.get('', (request, response) => {
    return bookController.findAll(request, response)
})

router.get('/:id', (request, response) => {
    return bookController.findById(request, response)
})


router.put('', (request, response) => {
    return bookController.update(request, response)
})

router.delete('/:id', (request, response) =>{
    return bookController.delete(request, response)
})

export { router }