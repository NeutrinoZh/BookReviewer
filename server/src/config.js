const config = {
    port: process.env.PORT || 3033,
    host: 'http://localhost:3033/',
    mongodb: "mongodb://localhost:27017/",
    urls: {
        server: `http://localhost:${process.env.PORT || 3033}`,
        reset_link: '/auth/reset-link/',
        signin: '/auth/signin/',
        signup: '/auth/signup/',
        reset: '/auth/reset/',
        new_password: '/auth/new-password/',
        change_name: '/change-name/',
        change_email: '/change-email/',
        change_avatar: '/change-avatar/',
        get_user: '/get-user/',

        add_book: '/add-book/',
        load_books: '/load-books/'
    },
    salt: 'c01d192d',
    maxAgeToken: 360000, // One hour
    maxAgeResetLink: 180000 // Half hour
}

export default config