const { getUsersService, getUserByIdService, createUserService, updateUserService, deleteUserService, filterUserService, searchUserService } = require('../services/userService');



module.exports = {
    getUsers: async (req, res) => {
        try {
            let result = await getUsersService();

            return res.status(200).json({
                errorCode: 0,
                data: result
            })
        } catch (err) {
            return res.status(500).json({
                errorMessage: "Error Server !"
            })
        }
    },



    getUserById: async (req, res) => {
        try {
            let result = await getUserByIdService(req.params)

            return res.status(200).json({
                errorCode: 0,
                data: result
            })
        } catch (err) {
            return res.status(500).json({
                errorMessage: "Cannot find user!"
            })
        }
    },



    createUser: async (req, res) => {
        try {
            let result = await createUserService(req.body);

            return res.status(200).json({
                errorCode: 0,
                errorMessage: "Create User Success",
                data: result
            })
        } catch (err) {
            return res.status(500).json({
                errorMessage: "Error Server!"
            })
        }
    },



    updateUser: async (req, res) => {
        try {
            let result = await updateUserService(req.body);

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



    deleteUser: async (req, res) => {
        try {
            let result = await deleteUserService(req.body);

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

    filterUser: async (req, res) => {
        try {
            let result = await filterUserService(req.body);

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


    searchUser: async (req, res) => {
        try {
            let result = await searchUserService(req.body);

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