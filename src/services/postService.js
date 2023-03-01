const Post = require("../models/post");
const User = require("../models/user");
const Category = require("../models/category");

module.exports = {
    getPostsService: async () => {
        let result = await Post.find({});

        return result;
    },



    createPostService: async (dataBody) => {
        const user = await User.findById(dataBody.userId);
        const category = await Category.findById(dataBody.categoryId);

        console.log(user);

        let result = await Post.create({
            title: dataBody.title,
            content: dataBody.content,
            category: dataBody.categoryId,
            user: dataBody.userId
        });

        user.posts.push(result);
        await user.save();

        category.posts.push(result);
        await category.save();

        return result;
    },
}