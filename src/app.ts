import express from 'express'

import cors from 'cors'
import { DataBaseSource } from './database/DataBase'
import { router } from './routes'

DataBaseSource
    .initialize().then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })


const app = express()

app.use(express.json())
app.use(cors())


app.use("/aluno-3011721/books", router)

export {app}