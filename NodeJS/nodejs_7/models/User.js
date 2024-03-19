import mongoose from 'mongoose';
const { Schema } = mongoose;
const { Model } = mongoose;
const { Types } = mongoose;

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        fullName: {
            type: String,
            require: String
        },
        pin: {
            type: Number,
            required: true
        }
    }
);

module.exports = {
    User: new Model("user", UserSchema)
};