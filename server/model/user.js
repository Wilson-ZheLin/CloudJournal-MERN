import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: false
    },
    color: Number,
});

userSchema.pre('save', function(next) {
    if (this.isNew) this.color = Math.floor(Math.random() * 5);
    next();
});

const User = mongoose.model('User', userSchema);
export default User;