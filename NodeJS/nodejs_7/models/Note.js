import mongoose from 'mongoose';
const { Schema } = mongoose;
const { Model } = mongoose;
const { Types } = mongoose;

const NoteSchema = new Schema(
    {
        title: String,
        description: String,
        owner: Types.ObjectId
    },
    {
        timestamps: true
    }
);

module.exports = {
    Note: new Model("note", NoteSchema)
};