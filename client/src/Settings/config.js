const config = {
    server: 'http://localhost:3033/',
    api: {
        signin: 'auth/signin/',
        signup: 'auth/signup/',
        password_reset: 'auth/reset/',
        new_password: 'auth/new-password/:id',

        add_book: 'add-book/',
        load_books: 'load-books/',
        like_book: 'like-book/:id',
        delete_book: 'delete-book/:id'
    },
}

export default config