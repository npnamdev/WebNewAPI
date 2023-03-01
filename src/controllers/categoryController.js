const { getCategorysService, getCategoryByIdService, createCategoryService, updateCategoryService, deleteCategoryService } = require("../services/categoryService")

module.exports = {
    getCategorys: async (req, res) => {
        try {
            let result = await getCategorysService();

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



    getCategoryById: async (req, res) => {
        try {
            let result = await getCategoryByIdService(req.params)

            return res.status(200).json({
                errorCode: 0,
                data: result
            })
        } catch (err) {
            return res.status(500).json({
                message: "Cannot find user!"
            })
        }
    },



    createCategory: async (req, res) => {
        try {
            let result = await createCategoryService(req.body);

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



    updateCategory: async (req, res) => {
        try {
            let result = await updateCategoryService(req.body);

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



    deleteCategory: async (req, res) => {
        try {
            let result = await deleteCategoryService(req.body);

            return res.status(200).json({
                errorCode: 0,
                data: result
            })
        } catch (err) {
            return res.status(500).json({
                message: "Error Server!"
            })
        }
    }



}