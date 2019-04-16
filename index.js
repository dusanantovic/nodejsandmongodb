const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost/users", 
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }
);
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use("/users", require("./routes/users"));

app.listen(process.env.port || 80, () => {
    console.log("Listening for request");
});