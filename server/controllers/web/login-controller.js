const { json } = require('express');
const express = require('express')
const app = express();
var session = require('express-session')
const Client = require('../../models/user/client')
const { success, error, validation } = require("../../helper/apiResponse");






const clientLogin = async function (req, res){
    console.log("thus is from login routes")  
    const {password,phone_number} = req.body;
    console.log( req.body)
    try {
        console.log(req.sessionID)
        const client = await Client.findOne({phone_number:phone_number});
        console.log(client)
        if(client)  {
            console.log(client.password)
            if(client.password ==  password){
             console.log(client.client_id)
                req.session.authenticated = true;
                req.session.user = {
                    client_id : client.client_id,
                    first_name : client.first_name
                }
                console.log(client + "client")
                res.send(client)
            }else{
                res.send("invalid password or phone number")
            }
        }else{
            res.send("not a client") 
        }
    } catch (error) { 
        res.send(error)   
    }
}
 

  

module.exports = {
    clientLogin
}