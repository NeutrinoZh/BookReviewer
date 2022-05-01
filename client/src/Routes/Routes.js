const Routes = ({
    home: '/',
    profile: '/profile/',
    edit_profile: '/edit-profile/',
    about: '/about/',
    
    detailBook: '/detail-book/:id',
    edit_book: '/edit-book/:book',
    add_new_book: '/add-new-book/',

    signin: '/signin/',
    signup: '/signup/',
    logout: '/logout/',
    reset_password: '/reset-password/',
    new_password: '/reset-link/:id',

    page404: '/*',
})

export default Routes