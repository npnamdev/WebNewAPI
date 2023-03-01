const User = require("../models/user")
const bcrypt = require('bcrypt');


module.exports = {
    getUsersService: async () => {
        let result = await User.find({});

        return result;
    },



    getUserByIdService: async (dataParams) => {
        let result = await User.findById(dataParams.id);

        return result;
    },



    createUserService: async (dataBody) => {
        let result = await User.create({
            username: dataBody.username,
            email: dataBody.email,
            password: dataBody.password,
            role: dataBody.role
        });

        return result;
    },



    updateUserService: async (dataBody) => {
        let result = await User.updateOne(
            {
                _id: dataBody.id
            },
            {
                username: dataBody.username,
                email: dataBody.email,
                password: dataBody.password,
                role: dataBody.role
            }

        );

        return result;
    },



    deleteUserService: async (dataBody) => {
        let result = await User.deleteOne({ _id: dataBody.id });

        return result;
    },



    filterUserService: async (dataBody) => {
        let result = "";
        if (dataBody.role == "all") {
            result = await User.find({});
        } else {
            result = await User.find({ role: dataBody.role });
        }

        return result;
    },


    searchUserService: async (dataBody) => {
        let email = dataBody.email;
        let result = await User.find({ email: new RegExp(`^${email}`) });

        return result;
    },
}