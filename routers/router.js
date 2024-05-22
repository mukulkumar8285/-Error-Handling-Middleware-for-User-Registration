const express = require("express");

const router = express.Router();
const ValidInputData = require("../controller/collection")


router.post("/" , ValidInputData, (req , res)=>{
    res.status(200).json({
        message : "Pls Enter Correct Input Data",
    });
});

module.exports = router;

