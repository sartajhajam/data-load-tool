/*
# cors - Cross origin resource sharing

**Cross-Origin Resource Sharing (CORS)** is a security feature implemented by web browsers that controls how resources on a web server can be requested from another domain.
 It's a crucial mechanism for managing `cross-origin` requests and ensuring secure interactions between `different origins` on the web.

 Assignment 

 Create a backend server in nodejs that returns the sum  endpoint 

 Write a HTML file that hits the backend server using the fetch api

*/


const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());

app.use(cors());
app.post("/sum", function(req, res) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a + b
    })
});

app.listen(3001);

