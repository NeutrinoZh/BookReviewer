import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

import config from './config.js'
import dbStart from './db.js'

import authRouter from './routers/auth.js'
import bookRouter from './routers/book.js'

import multiparty from 'multiparty'

// Connect to database (Mongoose)
const db = dbStart()

//  Get directory name constant
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Creating app
const app = express()

// Logger
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`)
    next()
})

// Set cors politic
app.use(cors())

// Parsers 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Static files 
app.use(express.static(`${__dirname}/public`))

// File upload middleware.
app.use((req, res, next) => {
    if (req.is('multipart/form-data')) {
        const form = new multiparty.Form()
        form.parse(req, (err, fields, files) => {
            if (!err) {
                for (let key in fields)
                    req.body[key] = fields[key][0]
                req.files = files
            } else {
                console.error(err)
            }
    
            next()
        })
    } else {
        next()
    }
})

// Connect routers
app.use(authRouter)
app.use(bookRouter)

// Run
app.listen(config.port)