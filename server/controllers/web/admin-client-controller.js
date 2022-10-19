const { json } = require('express');
const express = require('express')
const jwt = require('jsonwebtoken')
const Client = require('../../models/user/client')
const { success, error, validation } = require("../../helper/apiResponse");


const createClient = async function (req, res){   
    const {phone_number,office_name,address,password,role,email,first_name,last_name} = req.body;

    const clientList = await Client.find();
        if (clientList.length ==0 ){
            client_index = 0;
            console.log(client_index)
        }else{
           Robject =clientList.slice(-1).pop()
           console.log(Robject)
           client_index  =Robject.client_index ;
        }
        console.log(client_index)
        var client_id = 'Nex_'+(Number(client_index)+1);
        client_index = (Number(client_index)+1)

    try {
        var client = await Client.create({
            client_id,
            first_name,
            last_name,
            email,
            phone_number,
            office_name,
            address,
            password,
            client_index,
            role,
            client_status : "Active",
            
        });

        res.send(client)
    } catch (error) { 
        console.log(error)   
    }
}

const getClient = async function (req, res){
    console.log(req.session.user)        
    try {
        const clientList = await Client.find();
        res.send(clientList)
    } catch (error) { 
        res.send(error)   
    }
}

const deleteClient = async function (req, res){  
    const {client_id} = req.body; 
    const client_status = "inactive";     
    try {
        const deleteClient = await Client.findOneAndUpdate({client_id:client_id},{$set :{client_status:client_status}});
        const client = await Client.find({client_id:client_id});
        res.send(client)
    } catch (error) { 
        res.send(error)   
    }
}

const updateClient = async function (req, res){
    const {phone_number,office_name,address,password,role,email,client_id,last_name,first_name} = req.body;   
    try {
        const deleteClient = await Client.findOneAndUpdate({client_id:client_id},{$set :{phone_number:phone_number,office_name:office_name,address:address,password:password,role:role,email:email,last_name:last_name,first_name:first_name}});
        const client = await Client.find({client_id:client_id});
        console.log(client)
        res.send(client)
    } catch (error) { 
        res.send(error)   
    }
}
 

  

module.exports = {
    createClient,
    getClient,
    deleteClient,
    updateClient
}
