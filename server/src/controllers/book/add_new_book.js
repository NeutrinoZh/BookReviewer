import fs from 'fs'
import config from '../../config.js'

import Book from "../../models/book.js"

const add_new_book = (req, res, next) => {
    const {
        title, text
    } = req.body

    if (!(title && text))
        return res.json({ error: 'add_new_book_invalid_data' })

    const path = `${config.host}${req.files.image[0].originalFilename}`
    fs.createReadStream(
        req.files.image[0].path
    ).pipe(
        fs.createWriteStream(
            `./src/public/${req.files.image[0].originalFilename}`
        )
    );

    const book = new Book({
        user: req.user._id,
        title: title,
        text: text,
        image: path
    })

    book.save((err) => {
        if (err) return next(err)
        res.json({
            user: req.user._id,
            image: path, 
            id: book._id
        })
    })
}

export default add_new_book