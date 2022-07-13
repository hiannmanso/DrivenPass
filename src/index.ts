import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import dotenv from 'dotenv'
import chalk from 'chalk'


dotenv.config()

const server = express()
server.use(cors())
server.use(express.json())

server.listen(process.env.PORT||5000,()=>{
    console.log(chalk.italic.bold.hex('#ffbdd6')(`Backend up on PORT:${process.env.PORT}`))
    
})