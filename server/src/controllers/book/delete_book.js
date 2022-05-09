import Book from '../../models/book.js'

const delete_book = (req, res, next) => {
    Book.findById(req.params.id).then((book, err) => {
        if (err) return next(err)
        
        if (req.user._id != book.user) 
            return res.json({ error: 'no_access_book' })

        Book.deleteOne({ _id: req.params.id }).then(err => {
            if (err) return next(err)
        })        
        
        res.json({})  
    })
}

export default delete_book