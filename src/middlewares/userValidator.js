const User = require('../models/user');
const jwt = require('jsonwebtoken');


const { body, validationResult } = require('express-validator');

const validate = [
    body('username').not().isEmpty().trim().escape(),
    body('email').trim().isEmail().normalizeEmail(),
    body('password').trim().isLength({ min: 6, max: 12 }),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errorCode: -1,
                errorMessage: `Invalid ${errors.array()[0].param}!`,
            });
        }
        next();
    },
];


const checkDuplicateEmail = async (req, res, next) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email: email });

        if (user) {
            return res.status(409).json({
                errorCode: -1,
                errorMessage: 'Email already exists'
            });
        }

        next();
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};


const loginValidator = async (req, res, next) => {
    try {
        // Lấy token từ header Authorization
        const token = req.header('Authorization').replace('Bearer ', '');

        // Giải mã token và lấy thông tin user
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decoded.id, 'tokens.token': token });

        if (!user) {
            throw new Error();
        }

        // Gán user và token vào request để sử dụng ở những middleware, controller khác
        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Authentication failed' });
    }
}


module.exports = { validate, checkDuplicateEmail, loginValidator };
