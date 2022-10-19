import React,{Component} from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import AdminSidebar from "./adminSideBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
class AddClientForm extends React.Component{
    
    constructor(props) {
      super(props)
    
      this.state = {
        first_name : "",
        last_name : "",
        email : "",
        office_name : "",
        address : "",
        password : "",

      }
    }
    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state)
        axios
        .post("/web/client/add", this.state)
        .then(Response =>{
            console.log(Response
              )
          })
        .catch(err =>{
            console.log(err)
          })
    }

    changeHandler = e =>{
        this.setState({[e.target.name]:e.target.value})
    }
    
    
    render(){
        const{first_name,last_name,email,Office_name,address,password}= this.state
       return (
        <>
        <Navbar/>
      <AdminSidebar/>
  <div id="app" style={{marginTop : 100}}> 
    <section class="section">
      <div class="container mt-5">
        <div class="row">
          <div class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-11 offset-xl-2">
            <div class="card card-primary">
              <div class="card-header">
                <h4>Register</h4>
              </div>
              <div class="card-body">
                <form onSubmit={this.submitHandler}>
                <label for="frist_name"  className="badge badge-success badge-shadow">Basic Details</label>
                  <div class="row">
                    <div class="form-group col-6">
                      <label for="frist_name">First Name</label>
                      <input id="frist_name" type="text" class="form-control" name="first_name" value = {first_name} onChange={this.changeHandler} autofocus/>
                    </div>
                    <div class="form-group col-6">
                      <label for="last_name">Last Name</label>
                      <input id="last_name" type="text" class="form-control" name="last_name" value= {last_name} onChange={this.changeHandler} />
                    </div>
                  </div>
                  <label for="frist_name" className="badge badge-success badge-shadow">Contact Details</label>
                  <div class="row">
                    <div class="form-group col-6">
                      <label for="">Email</label>
                      <input id="last_name" type="email" class="form-control" name="email" value= {email} onChange={this.changeHandler} />
                    </div>
                    <div class="form-group col-6">
                      <label for="">Office Name</label>
                      <input id="office_name" type="text" class="form-control" name="office_name" value= {Office_name} onChange={this.changeHandler} />
                    </div>
                  </div>
                  <div class="row">
                  <div class="form-group col-6">
                      <label for="">Address</label>
                      <input id="address" type="text" class="form-control" name="address" value= {address} onChange={this.changeHandler} />
                    </div>
                  </div>
                  <label for="frist_name" className="badge badge-success badge-shadow">password</label>
                  <div class="row">
                    
                    <div class="form-group col-6">
                      <label>Password Strength</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <i class="fas fa-lock"></i>
                          </div>
                        </div>
                        <input type="password" name="password" id="password" value={password} class="form-control pwstrength" data-indicator="pwindicator" onChange={this.changeHandler} />
                      </div>
                      
                    </div>
                  </div>
                  <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-lg btn-block">
                      Register
                    </button>
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
}

export default AddClientForm;