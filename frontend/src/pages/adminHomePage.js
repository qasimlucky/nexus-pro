import React,{ useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AdminSidebar from "./adminSideBar";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
function AdminHomePage (){

    const [data, setposts] = useState([{}])
    const [client, setclients] = useState([{}])
    const [paginatedposts, setpaginatedposts] = useState([{}])
    const [currentPage, setcurrentPage] = useState(1)
    const pageSize = 5;
    useEffect(() => {
      axios.get("web/sales/all").then(Response =>{
        console.log(Response.data)
        setposts(Response.data)
        setpaginatedposts(_(Response.data).slice(0).take(pageSize).value());

      }).catch(err =>{
        console.log(err)
      })
      },[]);

       useEffect(() => {
        axios.get("/web/client").then(Response =>{
            console.log("this is client data")
          console.log(Response.data)
          setclients(Response.data)
        }).catch(err =>{
          console.log(err)
        })
        },[]); 
         const newfiltered = data.filter(isBigEnough);
          function isBigEnough(value) {
            return value.status == "new";
          }
          //console.log(newfiltered)
          const Completedfiltered = data.filter(iEnough);
          function iEnough(value) {
            return value.status == "completed";
          }
          //console.log(newfiltered)
          
           const  pageCount = data? Math.ceil(data.length/pageSize) : 0;
          if (pageCount==1) return null;
          const pages = _.range(1, pageCount+1)
          const paginationf = (pageNo) =>{
            setcurrentPage(pageNo);
            const startIndex = (pageNo -1)*pageSize;
            const paginatedpost = _(data).slice(startIndex).take(pageSize).value();
            setpaginatedposts(paginatedpost)
          }

       return (
        <div>
        <body>
        <div ></div>
        <div id="app">
            <div class="main-wrapper main-wrapper-1">
            <div class="navbar-bg"></div>
            
            <Navbar/>
            <AdminSidebar/>
            <div class="main-content">
                <section class="section">
                <div class="row ">
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div class="card table-responsive">
                        <div class="card-statistic-4 table table-striped" id="table-1">
                        <div class="align-items-center justify-content-between">
                            <div class="row ">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                                <div class="card-content">
                                <h5 class="font-15">All Client</h5>
                                <h2 class="mb-3 font-18">{client.length}</h2>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                                <div class="banner-img">
                                <img src="assets/img/banner/1.png" alt=""/>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div class="card">
                        <div class="card-statistic-4">
                        <div class="align-items-center justify-content-between">
                            <div class="row ">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                                <div class="card-content">
                                <h5 class="font-15"> All Sales</h5>
                                <h2 class="mb-3 font-18">{data.length}</h2>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                                <div class="banner-img">
                                <img src="assets/img/banner/2.png" alt=""/>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div class="card">
                        <div class="card-statistic-4">
                        <div class="align-items-center justify-content-between">
                            <div class="row ">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                                <div class="card-content">
                                <h5 class="font-15">New Sales</h5>
                                <h2 class="mb-3 font-18">{(newfiltered).length}</h2>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                                <div class="banner-img">
                                <img src="assets/img/banner/3.png" alt=""/>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div class="card">
                        <div class="card-statistic-4">
                        <div class="align-items-center justify-content-between">
                            <div class="row ">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                                <div class="card-content">
                                <h5 class="font-15">Completed</h5>
                                <h2 class="mb-3 font-18">{(Completedfiltered).length}</h2>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                                <div class="banner-img">
                                <img src="assets/img/banner/4.png" alt=""/>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h4>Sales</h4>
                  <div className="card-header-form">
                    <form>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                        />
                        <div className="input-group-btn">
                          <button className="btn btn-primary">
                            <i className="fas fa-search" />
                          </button>
                        </div>
                      </div>
                    </form>
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
                        </tr>
                        
                        {paginatedposts.map(SaleDetails => (
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
                            </td><td>
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
                           
                            
                          </tr>
                          ))}
                      </tbody>
                      <nav aria-label="Page navigation example">
                              <ul class="pagination justify-content-end">
                                {
                                  pages.map((page) =>(
                                    <li className={
                                         page == currentPage ? "page-item active" : "page-item"
                                    }>
                                      <p className="page-link" onClick={()=>paginationf(page)}>{page}</p>
                                     
                                      </li>
                                  ))
                                }
                              </ul>
                              </nav>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h4>Clients</h4>
                  <div className="card-header-form">
                    <form>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                        />
                        <div className="input-group-btn">
                          <button className="btn btn-primary">
                            <i className="fas fa-search" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-striped">
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
                        </tr>
                        {client.map(clientDetails => ( 
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
            </div>
        </div>
</body>
</div>
       );
    }


/*  component */
function bages(){
  return(
    <>
    
    </>
  )
}


export default AdminHomePage;