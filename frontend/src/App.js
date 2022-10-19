import React,{useEffect,useState} from 'react';
import axios from "axios";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/index'
import Client from './pages/client';
//import Post from './pages/post';
import Event from './pages/event';
import Addclient from './pages/addClientForm';
import Subscription from './pages/subscriptions';
import Notification from './pages/notifications';
import Editclient from './pages/editFrom';
import CheckApi from './pages/checkApi';
import LoginForm from './pages/loginForm';
import Sales from './pages/sales';
import AdminNewSales from './pages/adminNewSale';
import AdminProcessingSales from './pages/adminProcessingSale';
import AdminCancelledSales from './pages/adminCancelledSale';
import AdminCompletedSales from './pages/adminCompletedSale';
import EditSaleForm from './pages/editSaleAdmin';
import ClientSalesAll from './pages/clientSalesAll';
import LogoutForm from './pages/logout';
import ClientNewSales from './pages/clientNewSale';
import ClientCompletedSales from './pages/clientCompletedSale';
import ClientCancelledSales from './pages/clientCancelledSale';
import ClientProcessingSales from './pages/clientProcessingSale';
import AdminHomePage from './pages/adminHomePage';
import ClientLogoutForm from './pages/clientLogout';
import ClientAddSale from './pages/clientAddSale';
import ClientEditSaleForm from './pages/editSaleClient';


function App() {

const [data, setData] = useState({});
       
          useEffect(() => {
            axios
            .get("web/get-role",{

            })
            .then(Response =>{
               console.log(Response.data
                 )
                setData(Response.data)
            }).catch(err =>{
              console.log(err)
            })
            },[]);


            //console.log(data[0].role)

           
        
            if(data.role == null || undefined){
              console.log("this is me not data")
          return (
            <main>
                    <Routes>
                        <Route path="/" exact element={<LoginForm/>}/>
                        <Route path="/login" exact element={<LoginForm/>}/>
                        <Route path="/logout" exact element={<LoginForm/>}/>
                    </Routes>
                    
                        
                </main>
          );
  
         }     
       if(data.role == "admin"){
            console.log("this is me first")
        return (
          <main>
                  <Routes>
                      <Route path="/" exact element={<AdminHomePage/>}/>
                      <Route path="/dashboard" exact element={<Home/>}/>
                      <Route path="/client" exact element={<Client/>}/>
                      <Route path="/event" exact element={<Event/>}/>
                      <Route path="/subscription" exact element={<Subscription/>}/>
                      <Route path="/notification" exact element={<Notification/>}/>
                      <Route path="/CheckApi" exact element={<CheckApi/>}/>
                      <Route path="/addclient" exact element={<Addclient/>}/>
                      <Route path="/editclient" exact element={<Editclient/>}/>
                      <Route path="/adminnewsale" exact element={<AdminNewSales/>}/>
                      <Route path="/sales" exact element={<Sales/>}/>
                      <Route path="/admincancelledsales" exact element={<AdminCancelledSales/>}/>
                      <Route path="/adminprocessingsales" exact element={<AdminProcessingSales/>}/>
                      <Route path="/admincompletedsales" exact element={<AdminCompletedSales/>}/>
                      <Route path="/editsale" exact element={<EditSaleForm/>}/>
                      <Route path="/clientsale" exact element={<ClientSalesAll/>}/>
                      <Route path="/logout" exact element={<LogoutForm/>}/> 
                  </Routes>
                  
                      
              </main>
        );

       }if(data.role =="client"){
        console.log("second")
        return (
          
          <main>
                  <Routes>
                      <Route path="/" exact element={<ClientSalesAll/>}/>
                      <Route path="/addsale" exact element={<ClientAddSale/>}/>
                      <Route path="/sales" exact element={<Sales/>}/>
                      <Route path="/editsale" exact element={<ClientEditSaleForm/>}/>
                      <Route path="/clientsale" exact element={<ClientSalesAll/>}/>
                      <Route path="/logout" exact element={<ClientLogoutForm/>}/>
                      <Route path="/clientnewsale" exact element={<ClientNewSales/>}/>
                      <Route path="/clientcompletedsale" exact element={<ClientCompletedSales/>}/>
                      <Route path="/clientcancelledsale" exact element={<ClientCancelledSales/>}/>
                      <Route path="/clientprocessingsale" exact element={<ClientProcessingSales/>}/>
                      
                  </Routes>
                  
                      
              </main>
        );
      }
       }
 

export default App;
