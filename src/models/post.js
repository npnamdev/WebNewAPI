const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');


const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        category: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
            required: true
        }],
        user: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }]
    },
    {
        timestamps: true,
    }
)


postSchema.plugin(mongoose_delete, { overrideMethods: 'all' });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
