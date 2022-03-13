import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, min: 3, max: 100 },
    email: { type: String, required: true, min: 5, max: 100 },
    password: { type: String, required: true, min: 10, max: 100 },
    avatar: { type: String, required: true, default: 'http://localhost:3033/profile-default.jpg' },
    aboutMe: { type: String, required: true },
    followers: { type: Number, required: true },
    num_books: { type: Number, required: true },
    num_following: { type: Number, required: true },
    num_comments: [ String ],
    num_favorite: { type: Number, required: true },
    token: { type: String, min: 10, max: 100 }
})

export default mongoose.model('User', UserSchema)