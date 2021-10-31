const dotenv = require('dotenv');
const express = require('express');
const userRouter = require('./routes/user');


dotenv.config();

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use('/api/v1/users', userRouter);


app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`)
});