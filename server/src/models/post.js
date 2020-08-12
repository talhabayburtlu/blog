const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        uppercase: true
    },
    body: {
        type: String,
        required: true,
    },
    mediaLinks: [{
        type: String,
        trim: true,   
    }],
    breadcrumbs: [{
        type: String,
        trim: true,
    }]
}, {timestamps: true});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;