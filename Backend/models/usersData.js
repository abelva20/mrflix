import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        default:""
    },
    search_history: {
        type: Array,
        default: []
    },
    last_login: {
        type: Date,
        default: Date.now()
    }
})

export const User = mongoose.model('User', userSchema);