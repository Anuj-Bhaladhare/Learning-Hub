const express = require("express");
const cors = require('cors');
const app = express();

require("dotenv").config();
app.use(express.json());

const port = process.env.PORT;

// Allow requests from http://127.0.0.1:5501
app.use(cors({ origin: 'http://127.0.0.1:5501' }));

const databaseConnect = require("./config/dbConnect");
databaseConnect();

const router = require("./routes/router");
app.use("/api/v1", router)

app.listen( port, () => {
    console.log(`Server started at port number ${port}`)
})