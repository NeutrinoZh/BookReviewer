import Book from '../../models/book.js'

const like_book = (req, res, next) => {
    Book.find({}).then((books, err) => {
        if (err) return next(err)

        Book.findById(req.params.id).then((book, err) => {
            if (err) return next(err)
    
            if (req.user.favorites.indexOf(book._id) != -1) 
                req.user.set({
                    favorites: books.filter(el => el._id != book._id)
                })
            else 
                req.user.set({
                    favorites: [
                        ...req.user.favorites, 
                        book._id
                    ]
                })

            req.user.save((err) => {
                if (err) return next(err)

                res.json({})
            })
        })
    })
}

export default like_book