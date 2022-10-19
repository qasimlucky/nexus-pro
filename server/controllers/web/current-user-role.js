
const { json } = require('express');
const express = require('express')
const jwt = require('jsonwebtoken')
const Client = require('../../models/user/client')
const { success, error, validation } = require("../../helper/apiResponse");


const currentUser = async function (req, res){ 
    console.log("req a gai") 
    
    try {
        if(req.session.user){
            const {client_id} = req.session.user;
            const client = await Client.find({client_id:client_id});
           res.send(client[0])

        }else{
            res.send("please login")
        }
        
    } catch (error) { 
        res.send(error)   
    }
}
 
module.exports = {
    currentUser
}