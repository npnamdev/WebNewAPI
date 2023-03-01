const express = require('express');
const app = express();
const cors = require('cors');

const connection = require('./src/config/database');

require('dotenv').config();
const port = process.env.PORT || 8888;

const userRouter = require('./src/routes/userRouter');
const postRouter = require('./src/routes/postRouter');
const categoryRouter = require('./src/routes/categoryRouter');
const authRouter = require('./src/routes/authRouter');


//Config trình duyệt chặn API
app.use(cors({ origin: '*' }));


//Config req.body && middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//Config router
app.use('/v1/api/users', userRouter);
app.use('/v1/api/posts', postRouter);
app.use('/v1/api/categorys', categoryRouter);
app.use('/v1/api/auth', authRouter);



(async () => {
    try {
        //Connect DB mongoose
        await connection();

        //Lắng nghe Cổng chạy server
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}/v1/api/`);
        })
    } catch (error) {
        console.log("Error connect to DB: ", error);
    }
})();
