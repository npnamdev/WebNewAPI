const Category = require("../models/category")


module.exports = {
    getCategorysService: async () => {
        let result = await Category.find({});

        return result;
    },



    getCategoryByIdService: async (dataParams) => {
        let result = await Category.findById(dataParams.id);

        return result;
    },



    createCategoryService: async (dataBody) => {
        let result = await Category.create({
            name: dataBody.name
        });

        return result;
    },



    updateCategoryService: async (dataBody) => {
        let result = await Category.updateOne(
            {
                _id: dataBody.id
            },
            {
                name: dataBody.name,
            }
        );

        return result;
    },



    deleteCategoryService: async (dataBody) => {
        let result = await Category.deleteOne({ _id: dataBody.id });

        return result;
    },
}