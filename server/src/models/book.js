import mongoose from 'mongoose'

const BookSchema = new mongoose.Schema({
    user: { type: String },
    title: { type: String },
    text: { type: String },
    image: { type: String }
})

export default mongoose.model('Book', BookSchema)