const { json } = require('express');
const express = require('express')
const jwt = require('jsonwebtoken')
const Client = require('../../models/user/client')
const AddSale = require("../../models/user/Sale")
var session = require('express-session');
const { success, error, validation } = require("../../helper/apiResponse");
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
const multer  = require('multer');






const getSalesBySessionId = async function (req, res){  
    console.log(req.session.user.client_id)
    const {client_id} = req.session.user;      
    try {
    
        const client = await AddSale.find({client_id:client_id});
        res.send(client)
    } catch (error) { 
        res.send(error)   
    }
}
const clientSalesStatus = async function (req, res){  
    console.log(req.session.user.client_id)
    const {client_id} = req.session.user;  
    const {status} = req.body;    
    try {
    
        const client = await AddSale.find({client_id:client_id , status:status});
        res.send(client)
    } catch (error) { 
        res.send(error)   
    }
}



module.exports = {
    getSalesBySessionId,
    clientSalesStatus 
}