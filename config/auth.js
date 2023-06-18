const express = require('express')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifyJwt = (req,res,next)=>{
    const token = req.body.token || req.query.token || req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send("A token is required for authentication");
    }
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET_KEY) 
    if(verifyToken){
        console.log(verifyToken)
        req.user = verifyToken
    }

    next();
}

module.exports = verifyJwt