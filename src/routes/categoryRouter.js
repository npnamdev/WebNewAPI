const express = require('express');
const router = express.Router();

const { getCategorys, getCategoryById, createCategory, updateCategory, deleteCategory } = require("../controllers/categoryController");


// Lấy Tất Cả Users
router.get('/', getCategorys);

// Lấy 1 Users Theo Id
router.get('/:id', getCategoryById);

// Tạo 1 Users Theo Id
router.post('/', createCategory);

// Sửa 1 Users Theo Id
router.put('/', updateCategory);

// Xóa 1 Users Theo Id
router.delete('/', deleteCategory);


module.exports = router;