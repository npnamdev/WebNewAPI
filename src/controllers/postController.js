const { getPostsService, createPostService } = require("../services/postService")


module.exports = {
    getPosts: async (req, res) => {
        try {
            let result = await getPostsService();

            return res.status(200).json({
                errorCode: 0,
                data: result
            })
        } catch (err) {
            return res.status(500).json({
                message: "Error Server!"
            })
        }
    },



    getPostById: async (req, res) => {
        res.send("ok");
    },



    createPost: async (req, res) => {
        try {
            const result = await createPostService(req.body);
            console.log(result);
            // let result = await createPostService(req.body);
            // const { userId, categoryId, title, content } = req.body;
            // const user = await User.findById(userId);

            // if (!user) {
            //     return res.status(404).json({ error: 'User not found' });
            // }

            // const post = await Post.create({ title, content, category: categoryId, user: userId });


            // user.posts.push(post);
            // await user.save();

            // const category = await Category.findById(categoryId);
            // console.log(category);
            // if (!category) {
            //     return res.status(404).json({ error: 'Category not found' });
            // }

            // category.posts.push(post);
            // await category.save();


            return res.status(200).json({
                errorCode: 0,
                data: result,
                message: 'Post added to user and category successfully'
            })
        } catch (err) {
            return res.status(500).json({
                message: "Error Server!"
            })
        }
    },



    updatePost: async (req, res) => {
        res.send("ok");
    },



    deletePost: async (req, res) => {
        res.send("ok");
    }



}