import React from "react";
import { Link } from 'react-router-dom';
class Sidebar extends React.Component{
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
                    <li class="dropdown active">
                    <Link to="/clientsale" class="menu-toggle nav-link has-dropdown"><i data-feather="copy"></i><span>Client Sale</span></Link>    

                        <ul class="dropdown-menu">
                                    <li><Link class="nav-link" to="/clientsale">All</Link></li>
                                    <li><Link class="nav-link" to="/clientnewsale">New</Link></li>
                                    <li><Link class="nav-link" to="/clientprocessingsale">Processing</Link></li>
                                    <li><Link class="nav-link" to="/clientcompletedsale">Completed</Link></li>
                                    <li><Link class="nav-link" to="/clientcancelledsale">Cancelled</Link></li>
                         </ul> 
                                </li>
                                <li class="dropdown">
                    <Link to="/addsale" class="nav-link"><i data-feather="copy"></i><span>Add Sale</span></Link>    
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

export default Sidebar;