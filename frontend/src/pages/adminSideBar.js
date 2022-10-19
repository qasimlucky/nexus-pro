import React from "react";
import { Link } from 'react-router-dom';
class AdminSidebar extends React.Component{
    render(){
       return (
        <div class="main-sidebar sidebar-style-2">
                <aside id="sidebar-wrapper">
                <div class="sidebar-brand">
                    <a href="index.html"> <img alt="image" src="assets/img/logo.png" class="header-logo" /> <span
                        class="logo-name">Nexus</span>
                    </a>
                </div>
                <ul class="sidebar-menu">
                    <li class="menu-header">Main</li>
                    <li class="dropdown">
                    <Link to="/" class="nav-link"><i data-feather="monitor"></i><span>Dashboard</span></Link>
                    </li>
                    <li class="dropdown">
                    <Link to="/client" class="nav-link "><i data-feather="briefcase"></i><span>Client</span></Link>
                    </li>
                    <li class="dropdown active">
                    <Link to="/sales" class="menu-toggle nav-link has-dropdown"><i data-feather="briefcase"></i><span>Sales</span></Link>
                    
                    <ul class="dropdown-menu ">
                                <li><Link class="nav-link" to="/sales">All</Link></li>
                                <li><Link class="nav-link" to="/adminnewsale">New</Link></li>
                                <li><Link class="nav-link" to="/adminprocessingsales">Processing</Link></li>
                                <li><Link class="nav-link" to="/admincompletedsales">Completed</Link></li>
                                <li><Link class="nav-link" to="/admincancelledsales">Cancelled</Link></li>
                    </ul> 
                    </li>

                    <li class="dropdown">
                    <Link to="/logout" class="nav-link"><i data-feather="copy"></i><span>Logout</span></Link>    
                    </li>
                    
                </ul>
                </aside>
            </div>
       );
    }
}

export default AdminSidebar;