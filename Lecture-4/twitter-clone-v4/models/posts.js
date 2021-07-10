const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    content: {
        type: String,
        trim: true
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    replyTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }

}, { timestamps: true });


const Post = mongoose.model('Post', postSchema);

module.exports = Post;