import book from "../../models/book.js"
import Book from "../../models/book.js"
import User from "../../models/user.js"

const load_books = (req, res, next) => {
    Book.find({}, (err, books) => {
        if (err) return next(err)

        User.find({}, (err, users) => {
            if (err) return next(err)

            for (let i = 0; i < books.length; ++i)
                for (let j = 0; j < users.length; ++j)
                    if (books[i].user == users[j]._id)
                        books[i].user = users[j].name

            res.json(books)
        })
    })
}

export default load_books