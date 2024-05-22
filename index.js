const express = require("express");
const RegisterRouter = require("./routers/router")

const server = express();
const PORT = 8080;
server.use(express.json());

server.use("/" , RegisterRouter);

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: {
            message: err.message
        }
    });
});

server.listen(PORT , ()=>{
    console.log(`Server Is Started In Port No ${PORT}`);
})