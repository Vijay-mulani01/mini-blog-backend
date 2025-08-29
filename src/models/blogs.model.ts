import mongoose from "mongoose";

const blogsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    }
},
    { timestamps: true }
);

export const Blogs = mongoose.model('blogs', blogsSchema);