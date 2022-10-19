import React,{Component,useState} from "react";
import { useLocation,Link } from 'react-router-dom';

import axios, { Axios } from "axios";
import Sidebar from "./Sidebar";
import AdminSidebar from "./adminSideBar";
import Navbar from "./Navbar";
import Footer from "./Footer";


function EditClientForm (props){
const url = "/web/client/update"
const [data, setData] = useState({
    frist_name : "",
    last_name : "",
    email : "",
    office_name : "",
    address : "",
    password : "",
    client_id : ""



})   

function handle(e){
       const newdata = {...data}
       newdata[e.target.id] = e.target.value
       setData(newdata)
      // console.log(newdata)
}
function submit(e){
      e.preventDefault();
      axios
      .post(url,{
        frist_name : data.frist_name,
        last_name : data.last_name,
        email : data.email,
        office_name : data.office_name,
        address : data.address,
        password : data.password,
        client_id : data.client_id

      })
      .then(res =>{
        alert("updated")
        //console.log(res.data)
      })

}

function DeleteClient(client_id){
  axios
      .post("/web/client/delete",{
        client_id :client_id,
      })
}
function Resetpassword(id){
  console.log("this is restset id" + id)
  axios
      .post("/web/reset-password",{
        client_id :id,
      }).then(res =>{
        console.log(res.data)
      })
}




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
                <h4>Register</h4>
              </div>
              <div class="card-body">
                <form  onSubmit = {(e) =>submit(e)}>

                <label for="frist_name" className="badge badge-primary badge-shadow">Basic Details</label>
                  <div class="row">
                    <div class="form-group col-6">
                      <label for="frist_name">First Name</label>
                      <input onChange = {(e) =>handle(e)} id="frist_name" type="text" class="form-control" name="first_name"  value ={data.first_name}  placeholder= {Rdata.first_name} />
                    </div>
                    <div class="form-group col-6">
                      <label for="last_name">Last Name</label>
                      <input  onChange = {(e) =>handle(e)} id="last_name" type="text" class="form-control" name="last_name" value={data.last_name} placeholder= {Rdata.first_name} />
                    </div>
                  </div>

                  <label for="frist_name" className="badge badge-primary badge-shadow">Contact Details</label>
                  <div class="row">
                    <div class="form-group col-6">
                      <label for="">Email</label>
                      <input onChange = {(e) =>handle(e)} id="email" type="email" class="form-control" name="email" value={data.email} placeholder= {Rdata.email} />
                    </div>
                    <div class="form-group col-6">
                      <label for="">Office Name</label>
                      <input onChange = {(e) =>handle(e)} id="office_name" type="text" class="form-control" name="office_name" value={data.office_name}  placeholder={Rdata.office_name} />
                    </div>
                    
                  </div>
                  <div class="row">
                  <div class="form-group col-6">
                      <label for="">Address</label>
                      <input onChange = {(e) =>handle(e)} id="address" type="text" class="form-control" name="address" value={data.address}  placeholder= {Rdata.address} />
                    </div>
                  </div>


                  <label for="frist_name" className="badge badge-primary badge-shadow">password</label>
                  <div class="row">
                    
                    <div class="form-group col-6">
                      <label>Password Strength</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <i class="fas fa-lock"></i>
                          </div>
                        </div>
                        <input onChange = {(e) =>handle(e)} id="password" type="password" name="password" value={data.password} class="form-control pwstrength" data-indicator="pwindicator" placeholder= {Rdata.password} />
                      </div>
                      <input onChange = {(e) =>handle(e)} type="hidden" name="client_id"  id ="client_id" value={data.client_id = Rdata.client_id} class="form-control pwstrength"  />
                    </div>
                  </div>
                  
                  
                  <div class="row">
                    <div class="form-group col-4">
                        <button type="submit" class="btn btn-success btn-lg btn-block">
                          Update
                        </button>
                        </div>
                        <div  class="form-group col-4">
                            <Link to="/client" onClick={()=>DeleteClient( Rdata.client_id)} className="btn btn-danger btn-lg btn-block">
                            Inactive
                            </Link>
                        </div>
                        <div  class="form-group col-4">
                            <Link to="/client" onClick={()=>Resetpassword( Rdata.client_id)} className="btn btn-primary btn-lg btn-block">
                            ResetPassword
                            </Link>
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


export default EditClientForm;