const express = require('express');
const router = express.Router();

const { getPosts, getPostById, createPost, updatePost, deletePost } = require("../controllers/postController");


// Lấy Tất Cả Users
router.get('/', getPosts);

// Lấy 1 Users Theo Id
router.get('/:id', getPostById);

// Tạo 1 Users Theo Id
router.post('/', createPost);

// Sửa 1 Users Theo Id
router.put('/', updatePost);

// Xóa 1 Users Theo Id
router.delete('/', deletePost);


module.exports = router;