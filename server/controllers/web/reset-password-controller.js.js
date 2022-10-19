
const { json } = require('express');
const express = require('express')
const jwt = require('jsonwebtoken')
const Client = require('../../models/user/client')
const { success, error, validation } = require("../../helper/apiResponse");


const resetPassword = async function (req, res){ 
    console.log("req a gai") 
    console.log(req.body)
    const {client_id} = req.body; 
    console.log(client_id)
    const password= "12345";     
    try {
        const resetPasswordClient = await Client.findOneAndUpdate({client_id:client_id},{$set :{password:password}})
        
        const client = await Client.find({client_id:client_id});
        console.log(client)
        res.send(client)
    } catch (error) { 
        res.send(error)   
    }
}
 

  

module.exports = {
    resetPassword
}