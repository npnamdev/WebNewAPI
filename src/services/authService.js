const User = require('../models/user');

module.exports = {
    registerService: async (dataBody) => {
        try {
            const result = await User.create({
                username: dataBody.username,
                email: dataBody.email,
                password: dataBody.password,
                role: dataBody.role
            });

            return result;
        } catch (error) {
            console.log(error);
            throw new Error('Failed to create user');
        }
    },




    // loginService: async (dataBody) => {
    //     try {
    //         const result = "nam";
    //         return result;
    //     } catch (error) {
    //         console.log(error);
    //         throw new Error('Failed to create user');
    //     }
    // },
}
