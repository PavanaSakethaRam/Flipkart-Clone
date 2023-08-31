import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        // required: true,
        min: 3,
        max: 20,
    },
    lastname: {
        type: String,
        // required: true,
        min: 3,
        max: 20,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    phone: {
        type: String,
        // required: true,
    }
});

const user = mongoose.model('user', userSchema);
export default user;