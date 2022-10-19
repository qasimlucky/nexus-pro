
import React,{Component,useState} from "react";
import { useLocation,Link } from 'react-router-dom';

import axios, { Axios } from "axios";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import AdminSidebar from "./adminSideBar";
import Footer from "./Footer";


function EditSaleForm (props){

 const url = "/web/sales/update"
const [data, setData] = useState({
    barcode : "",
    date_of_barcode : "",
    tracking_url : "",
    office_name : "",
    sale_id : "",
    file : "",
    status : "",



})  
   /*  function upload (e){
    const file = e.target.files[0]
     this.useState({file:file})
    console.log(file)

}  */
 function upload (e){
  const newdata = {...data}
  const file = e.target.files[0]
  newdata[e.target.id] = e.target.files[0]

  setData(newdata)
  console.log(newdata)

} 

function handle(e){
    
       const newdata = {...data}
       newdata[e.target.id] = e.target.value
       setData(newdata)
      //console.log(newdata)
      //console.log(data.file)
}
 function submit(e){
  console.log(data)
      e.preventDefault();
      axios
      .post(url,data,{
        headers: {
          "Content-Type": "multipart/form-data",
        }

      })
      .then(res =>{
        alert("updated")
        //console.log(res.data)
      })

} 

/* const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  console.log(formData)
  axios
    .post("/web/sales/update", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}); */

    const location = useLocation();
      // console.log(location.state.sendData) 
        const Rdata = location.state.sendData
        //console.log(Rdata.first_name)
       return (
        <>
        <Navbar/>
        <AdminSidebar/>

  <div id="app" style={{marginTop : 100}}>
    <section class="section">
      <div class="container mt-10">
        <div class="row">
          <div class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-11 offset-xl-2">
            <div class="card card-primary">
              <div class="card-header">
                <h4>Edit Sale</h4>
              </div>
              <div class="card-body">
                <form  action="/web/sales/update"  onSubmit = {(e) =>submit(e)} method="HTTP_METHOD" encType="multipart/form-data">
                  <div class="row">
                    <div class="form-group col-6">
                      <h5><label >
                         Client ID  :   {Rdata.client_id}</label></h5>
                    </div>
                    <div class="form-group col-6">
                    <h5><label >ClientId    :  {Rdata.sale_id}</label></h5>
                    </div>
                  </div>

                  <label  className="badge badge-primary badge-shadow">Sale Details</label>
                  <div class="row">
                    <div class="form-group col-6">
                      <label for="">BarCode</label>
                      <input onChange = {(e) =>handle(e)} id="barcode" type="text" class="form-control" name="barcode" value={data.barcode} placeholder= {Rdata.barcode} />
                    </div>
                    <div class="form-group col-6">
                      <label for="">Date Of Barcode</label>
                      <input onChange = {(e) =>handle(e)} id="date_of_barcode" type="text" class="form-control" name="date_of_barcode" value={data.date_of_barcode}  placeholder={Rdata.date_of_barcode} />
                    </div>
                    
                  </div>
                  <div class="row">
                  <div class="form-group col-6">
                      <label for="">Tracking Url</label>
                      <input onChange = {(e) =>handle(e)} id="tracking_url" type="text" class="form-control" name="tracking_url" value={data.tracking_url}  placeholder= {Rdata.tracking_url} />
                    </div>
                  <div class="form-group col-6">
                      <label for="">Product Item</label>
                      <input onChange = {(e) =>handle(e)}  id="product_item" type="text" class="form-control" name="product_item" value={data.product_item}  placeholder= {Rdata.product_item} />
                    </div>
                    
                  </div>
                  <div class="row">
                    <div class="form-group col-6">
                      <label>Receipt</label>
                        <div class="custom-file">
                      <input type="file" onChange = {(e) =>upload(e)}  name="file"  class="custom-file-input" id="file"/>
                      <label class="custom-file-label" for="customFile">Receipt</label>
                    </div>
                    <input onChange = {(e) =>handle(e)} type="hidden" name="sale_id"  id ="sale_id" value={data.sale_id = Rdata.sale_id}   />
                    </div>
                    <div class="form-group col-2"></div>
                    <div class="form-group col-4">
                      <label class="d-block">Status</label>
                      <div  onChange = {(e) =>handle(e)}>
                        <input class="form-check-input" type="radio"  id="status" name="status" value="new"/>New <br></br>
                        <input class="form-check-input" type="radio" id="status" name="status" value="processing"/> Processing<br></br>
                        <input class="form-check-input" type="radio"  id="status"name="status" value="completed"/>Completed<br></br>
                        <input class="form-check-input" type="radio"  id="status"name="status" value="cancelled"/>Cancelled
                      </div>
                    </div> 
                </div>
                  
                  <div class="row">
                    <div class="form-group col-4">
                        <button type="submit" class="btn btn-success btn-lg btn-block">
                          Update
                        </button>
                    </div>    
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</>
       );
}

export default EditSaleForm;