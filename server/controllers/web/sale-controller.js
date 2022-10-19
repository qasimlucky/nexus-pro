const { json } = require('express');
const express = require('express')
const jwt = require('jsonwebtoken')
const Client = require('../../models/user/client')
const AddSale = require("../../models/user/Sale")
var session = require('express-session');
const { success, error, validation } = require("../../helper/apiResponse");
const { CleanData } = require("../../../server/helper/cleanEmptyData");
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
const multer  = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Uploads is the Upload_folder_name
        cb(null, "server/public/images")
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now()+".jpg");
        var filePath = file.fieldname + "-" + Date.now()+".jpg";

    } 
});


const addSales =  async function (req, res){
   // console.log(req.body.file)

    const AddSaleList= await AddSale.find();
    var sale_id = 'sale_id_'+((AddSaleList.length)+1);
    console.log(req.body.client_id)
    //console.log(req.body)
    try{
       
        console.log(req.session.user)

        const {client_id} = req.session.user;
        if(req.file){
            const receipt =("http://localhost:5000/static/"+req.file.filename);
            //const data = req.body
           // var cleanData = await CleanData(data);
            const {barcode,date_of_barcode,product_item,tracking_url} = req.body;
            //console.log(cleanData)
        
        var createSale = await AddSale.create({
            client_id,
            sale_id,
            barcode,
            date_of_barcode,
            product_item,
            receipt,
            tracking_url,



        });
        
        res.status(200).json(success("Success",
                                    createSale,
                                    res.statusCode
                                    ));

           
        }else{
;
            const {barcode,date_of_barcode,product_item,tracking_url} = req.body;
            //console.log(cleanData)
        
        var createSale = await AddSale.create({
            client_id,
            sale_id,
            barcode,
            date_of_barcode,
            product_item,
            tracking_url,



        });
        
        res.status(200).json(success("Success",
                                    createSale,
                                    res.statusCode
                                    ));


        }

    }catch(err){
            res
            .status(500)
            .json(error("Server error", res.statusCode));
    }
    
       
}


const getSales = async function (req, res){  
    console.log(req.session)
    const {client_id,status} = req.body;      
    try {
    
        const client = await AddSale.find({client_id:client_id , status:status});
        res.send(client)
    } catch (error) { 
        res.send(error)   
    }
}


const adminGetSales = async function (req, res){ 
    
    console.log("i am from front end") 
    const {status} = req.body;      
    try {
    
        const client = await AddSale.find({status:status});
        res.send(client)
    } catch (error) { 
        res.send(error)   
    }
}
const adminGetAllSales = async function (req, res){
    console.log(req.session + "this is session ")       
    try {
        // const client = await AddSale.find();
        // res.send(client)

        const bb= await AddSale.aggregate([
            { $lookup:
             {
                from: "clients",
                localField: 'client_id',
                foreignField: "client_id",
                as: "clientDetails"
             }
           }
           ])


       console.log(bb)
       res.send(bb)

    } catch (error) { 
        res.send(error)   
    }
}

const adminUpdateSales = async function (req, res){ 
    console.log("this is me from admin sale")
    console.log(req.body)
    //console.log(req.body.file)
    console.log(req.file)
   // console.log(req.file.filename)      
    try {
        if(req.file){
            console.log("this is update")
            const receipt =("http://localhost:5000/static/"+req.file.filename);
       
            console.log(receipt + "receipt")
        console.log("heloooooooooooooooooooooooooo")
        const {sale_id,barcode,date_of_barcode,product_item,tracking_url,status} = req.body; 
        const updateSale = await AddSale.findOneAndUpdate({sale_id:sale_id},{$set :{barcode:barcode,date_of_barcode:date_of_barcode,product_item:product_item,tracking_url:tracking_url,receipt:receipt,status:status}})
        
        const client = await AddSale.find({sale_id:sale_id});
        res.send(client)

        }else{
        const {sale_id,barcode,date_of_barcode,product_item,tracking_url,status} = req.body; 
        console.log("this is me from else")
        console.log(req.body)
        const updateSale = await AddSale.findOneAndUpdate({sale_id:sale_id},{$set :{barcode:barcode,date_of_barcode:date_of_barcode,product_item:product_item,tracking_url:tracking_url,status:status}})
          
        const client = await AddSale.find({sale_id:sale_id});
        console.log(client)

        res.send(client)
    
        }
        
    } catch (error) { 
        res.send(error)   
    }
}

  

module.exports = {
    addSales,
    storage,
    getSales,
    adminGetSales,
    adminGetAllSales,
    adminUpdateSales
}