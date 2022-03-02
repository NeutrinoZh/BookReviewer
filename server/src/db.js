import mongoose from 'mongoose'
import config from './config.js'

function dbStart() {
    mongoose.connect(config.mongodb)
    mongoose.Promise = global.Promise
    
    const db = mongoose.connection
    db.on('error', console.error.bind(console, 'MongoDB connection error:'))

    return db
}

export default dbStart