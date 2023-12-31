const express = require("express");
const app =  express();

// required_packages
const path = require("path");
const cors = require("cors"); 
const session = require("express-session");
const bodyParser = require("body-parser");  

// server_port
let PORT = process.env.PORT || 8080;
//process.env.PORT

// middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes 
app.get("/test", (req, res)=>{
    res.send({
        message: "Works in native mode !",
        status: 200
    });
});
app.use("/", require("./routes/pages"));

// api 
app.use("/comments/", require("./routes/api"));

// start_server
app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`Server running on port ${PORT}`);
});
