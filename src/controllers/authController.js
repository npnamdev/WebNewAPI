const { registerService, loginService } = require('../services/authService');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    register: async (req, res) => {
        try {
            const result = await registerService(req.body);

            return res.status(201).json({
                errorCode: 0,
                data: result
            });
        } catch (error) {
            return res.status(500).json({
                errorCode: -1,
                errorMessage: error.message
            });
        }
    },




    login: async (req, res) => {
        const { email, password } = req.body;

        try {
            // Kiểm tra email
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({
                    errorCode: -1,
                    errorMessage: 'Email does not exist!'
                });
            }

            // Kiểm tra password
            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({
                    errorCode: -1,
                    errorMessage: 'Incorrect password!'
                });
            }

            // Tạo JWT
            const payload = {
                user: {
                    id: user.id,
                },
            };


            // Generate and send token
            const token = jwt.sign(
                payload,
                'my-key',
                { expiresIn: '1h' }
            );


            return res.status(200).json({
                data: {
                    access_token: token,
                    username: user.username,
                    email: user.email,
                    post: user.posts,
                    role: user.role,
                },
                errorCode: 0,
                errorMessage: 'Login Success!',
            })

        } catch (err) {
            res.status(500).json({
                errorCode: -1,
                errorMessage: 'Server error!'
            });
        }
    },
}



























// const resgisterUser = async (req, res) => {
//     const { username, email, password } = req.body;

//     try {
//         let result = await User.findOne({ email });

//         if (result) {
//             return res.status(400).json({
//                 message: 'Tài khoản với địa chỉ email này đã tồn tại'
//             });
//         }


//         // Mã hóa mật khẩu
//         const hashedPassword = await bcrypt.hash(password, 10);

//         result = await User.create({
//             username,
//             email,
//             password: hashedPassword
//         });


//         return res.status(201).json({
//             data: result,
//         });

//     } catch (err) {
//         console.log(err);
//     }
// }



// const loginUser = async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         let result = await User.findOne({ email });



//         if (!result) {
//             return res.status(400).json({
//                 message: 'Invalid credentials 1'
//             });
//         }

//         // Validate user password
//         const isValidPassword = await bcrypt.compare(password, result.password);

//         if (!isValidPassword) {
//             return res.status(401).json({ message: 'Sai password' });
//         }

//         const payload = {
//             user: {
//                 id: result.id,
//             }
//         };

//         // Generate and send token
//         const token = jwt.sign(
//             payload,
//             'my-secret-key',
//             { expiresIn: '1h' }
//         );

//         return res.status(200).json({
//             data: {
//                 access_token: token,
//                 username: result.username,
//                 email: result.email,
//                 post: result.posts,
//             },
//             errorCode: 0,
//             errorMessage: 'Login Success!'
//         })
//     } catch (err) {
//         console.log(err);
//     }
// }

// module.exports = {
//     loginUser, resgisterUser
// }