const express = require('express');
const { connectMongoose } = require('./db.js');
const cors = require("cors");
const bodyParser = require('body-parser');
const userRouter = require("./routes/userRoutes.js");
const authorization = require("./middleware/authorization.js");
const courseRoute = require("./routes/courseRoute.js");
const dotenv = require("dotenv");

dotenv.config();


const app = express();

app.use(cors({
    origin:'*',
    methods: ["GET", "POST"],
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
connectMongoose()

//userRoutes
app.use("/userRoute",userRouter)
app.use("/courseRoute", authorization, courseRoute);

app.get('/', (req, res) => {
    res.send('Welcome to freecodecamp');
});

app.listen(process.env.PORT || 3000, () => {
    return console.log(`Express is listening at http://localhost:${process.env.PORT}`);
});