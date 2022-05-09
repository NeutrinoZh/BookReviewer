import User from "../../models/user.js"

const get_user = (req, res, next) => {
    const {
        id
    } = req.body

    if (!id)
        res.json('invalid_get_user_data')

    User.findOne({ _id: id }, (err, found_user) => {
        if (err) return next(err)

        res.json({
            name: found_user.name,
            email: found_user.email,
            aboutMe: found_user.aboutMe,
            followers: found_user.followers,
            num_books: found_user.num_books,
            num_following: found_user.num_following,
            num_comments: found_user.num_comments,
            num_favorite: found_user.favorites.length,
            token: found_user.token,
            avatar: found_user.avatar,
            id: found_user._id
        })
    })
}

export default get_user