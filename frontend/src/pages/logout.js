import React,{Component,useState} from "react";
import { useLocation,useNavigate } from 'react-router-dom';

import axios, { Axios } from "axios";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import AdminSidebar from "./adminSideBar";
function LogoutForm (){
  let navigate = useNavigate();
    function submit(e){
      
        axios
        .post("web/logout")
         
        .then(res =>{
          alert("Logout")
          navigate("/")
          console.log(res.data)
           
           //window.location.reload();

          })
          .catch(err =>{
            console.log(err)
          })
          }

          async function handle(e){
            console.log("this is logout");
           
          }
          
      

       return (
        <>
        <Navbar/>
      <AdminSidebar/>
        <div id="app" style={{marginTop : 150}}>
    <section class="section">
      <div class="container mt-10">
        <div class="row">
          <div class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-3">
            <div class="card card-primary">
              <div class="card-header">
              <h3 class="form-group col-4">Logout</h3>
              </div>
              <div class="card-body">
                <form onSubmit = {(e) =>submit(e)}>
                  <div class="row">
                  <div class="form-group col-2"></div>
                    <div class="form-group col-8">
                        <button onClick={(e) =>handle(e)} type="submit" class="btn btn-success btn-lg btn-block">
                          Logout
                        </button>
                        </div>
                        <div class="form-group col-2"></div>
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

export default LogoutForm