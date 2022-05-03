import Book from "../../models/book.js"

const load_books = (req, res, next) => {
    Book.find({}, (err, books) => {
        if (err) return next(err)
        console.log(books)
        res.json(books)
    })
}

export default load_books