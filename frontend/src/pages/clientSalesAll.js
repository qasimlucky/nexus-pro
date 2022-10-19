import React,{ useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { Link,useNavigate } from 'react-router-dom';
import useFetch from "../useFetch";
function ClientSalesAll() {
  const [data, setposts] = useState([{}])

    useEffect(() => {
      axios.get("web/client/sale").then(Response =>{
        console.log(Response.data
          )
        setposts(Response.data)
      }).catch(err =>{
        console.log(err)
      })
      },[]);


      let navigate = useNavigate();
    function editSale(sendData){
        console.log(sendData)
        navigate("/editsale",{state:{sendData:sendData}})
         
      }

       return (
        <>
      <Navbar/>
      <Sidebar/>
    <div className="main-content">
          <section className="section">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4>All Posts</h4>
                  </div>
                  <div className="card-header mb-3">
                    <div>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                        />
                        <div className="input-group-btn ml-1">
                          <button className="btn btn-primary">
                            <i className="fas fa-search" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <tbody>
                          <tr className="align-center">
                            <th>ClientId</th>
                            <th>SaleId</th>
                            <th>Barcode</th>
                            <th>Recipt</th>
                            <th>status</th>
                            <th>Date</th>
                            <th>tracking_url</th>
                            <th>Action</th>
                          </tr>
                             {data.map(SaleDetails => (
                            <tr className="align-center">
                            <td>{SaleDetails.client_id}</td>
                            <td>{SaleDetails.sale_id}</td>
                            <td>{SaleDetails.barcode}</td>
                            <td>
                              <img
                                alt="image"
                                src={SaleDetails.receipt}
                                className="rounded-circle"
                                width={35}
                                data-toggle="tooltip"
                              />
                            </td>
                            <td>
                            {(() => {
                             if (SaleDetails.status == 'completed'){
                              return (
                                <div className="badge badge-success badge-shadow p-2">
                                  {SaleDetails.status}
                                  </div>
                             )
                              }if (SaleDetails.status == 'new'){
                                return (
                                  <div className="badge badge-primary badge-shadow p-2">
                                    {SaleDetails.status}
                                    </div>
                               )
                                }
                                if (SaleDetails.status == 'processing'){
                                  return (
                                    <div className="badge badge-warning badge-shadow p-2">
                                      {SaleDetails.status}
                                      </div>
                                 )
                                  }
                                   else{
                                    return (
                                      <div className="badge badge-danger badge-shadow p-2">
                                        {SaleDetails.status}
                                        </div>
                                   )
                                    }
              
                            })()}
                            </td>
                            <td>{SaleDetails.created_at}</td>
                            
                            {/* <td>{(SaleDetails.created_at).slice(0, 10)}</td> */}
                            <td>{SaleDetails.tracking_url}</td>
                            <td>
                            
                            <button  onClick={()=>editSale(SaleDetails)} className="btn btn-primary">
                              Edit
                            </button>
                          </td>
                            
                          </tr>
                          ))}    
                          
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>  
      <Footer/>
  

        </>
       )
}

export default ClientSalesAll;