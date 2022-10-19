import React,{ useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AdminSidebar from "./adminSideBar";
import { Link,useNavigate } from 'react-router-dom';
function Client(props) {
  const [data, setposts] = useState([{}])

    useEffect(() => {
      axios.get("web/client").then(Response =>{
        console.log(Response.data
          )
        setposts(Response.data)
      }).catch(err =>{
        console.log(err)
      })
      },[]);
let navigate = useNavigate();

    function updateClient(sendData){
        console.log(sendData)
        navigate("/editclient",{state:{sendData:sendData}})
         
      }
       return (
        <>
      <Navbar/>
      <AdminSidebar/>
      <div className="main-content">
        <section className="section">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h4>All Clients</h4>
                  <div className="card-header-form">
                    <Link to="/addClient" className="btn btn-success ">
                      + Add Client
                    </Link>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table id="table-1" className="table table-striped">
                      <tbody>
                        <tr className="align-center">
                          <th>ID</th>
                          {/* <th>Image</th> */}
                          <th>Name</th>
                          <th>Email</th>
                          <th>Address</th>
                          <th>Phone Number</th>
                          <th>Office Name</th>
                          <th>Status</th>
                          <th>Action</th>
                         </tr> 
                         {data.map(clientDetails => ( 
                          <tr className="align-center">
                          <td> {clientDetails.client_id}</td>
                          {/* <td>
                            <img
                              alt="image"
                               src={userDetails.perfile_pic}
                              className="rounded-circle"
                              width={35}
                              data-toggle="tooltip"
                            />
                          </td> */}
                          <td>{clientDetails.first_name+clientDetails.last_name}</td>
                          <td>{clientDetails.email}</td>
                          <td>{clientDetails.address}</td>
                          <td>{clientDetails.phone_number}</td>
                          <td>{clientDetails.office_name}</td>
                          <td>
                          {(() => {
                             if (clientDetails.client_status == 'Active'){
                              return (
                                <div className="badge badge-success badge-shadow p-2">
                                  {clientDetails.client_status}
                                  </div>
                             )
                              }else{
                                return(
                                  <div className="badge badge-danger badge-shadow p-2">
                                {clientDetails.client_status}
                                </div>
                                )
                              }
              
                            })()}
                            
                          </td>
                          <td>
                            
                            <button  onClick={()=>updateClient(clientDetails)} className="btn btn-primary">
                              Edit
                            </button>
                          </td>
                        </tr>

                           ))}  
                       
                        
                        {/* <tr className="align-center">
                          <td> 4</td>
                          <td>
                            <img
                              alt="image"
                              src="https://vip-circle-backend.herokuapp.com/static/file-1664789400731.jpg"
                              className="rounded-circle"
                              width={35}
                              data-toggle="tooltip"
                            />
                          </td>
                          <td>John Wick</td>
                          <td>Jonathan</td>
                          <td>Johnwick@alive.com</td>
                          <td>123456789</td>
                          <td>
                            <div className="badge badge-danger badge-shadow">
                              Non-Active
                            </div>
                          </td>
                          <td>
                            <div class="pretty p-switch p-fill">
                              <input type="checkbox" />
                              <div class="state p-success">
                                <label>Verified</label>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="btn btn-primary">
                              View
                            </a>
                          </td>
                        </tr> */}
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
       );
    }


export default Client;