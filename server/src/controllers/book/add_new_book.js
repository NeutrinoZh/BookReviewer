import Book from "../../models/book.js"

const add_new_book = (req, res, next) => {
    const {
        title, text
    } = req.body

    console.log('FILES:', req.files)

    if (!(title && text))
        return res.json({ error: 'add_new_book_invalid_data' })

    const book = new Book({
        user: req.user._id,
        title: title,
        text: text
    })

    book.save((err) => {
        if (err) return next(err)
        res.json({ id: book._id })
    })
}

export default add_new_book