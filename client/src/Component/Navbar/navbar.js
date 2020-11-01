import React,{Fragment} from 'react';
import './navbar.css'
import {Link,Route,Switch} from 'react-router-dom'
import Signup from '../../Pages/Signup/signup';
import VerifyOTP from '../../Pages/OTP/otp';
import Login from '../../Pages/Login/login';
import LandingPage from '../../Pages/Landing_Page/landing_page'
import Logo from './MyWays Logo.png'
import InstantLogo from './Instant_logo.png'
import {Navbar,Nav} from 'react-bootstrap'

function Navbars(){
    return (
        <div>
        <Navbar className="Navbarbar" style={{'backgroundColor':'white'}}>
            <Navbar.Brand>
            <img className="logo" src={Logo} alt="Logo"/>
            </Navbar.Brand>
           
            <Nav className="ml-auto" style={{'marginRight':'150px','position':'relative'}}>  
                <Fragment>
                    <Nav.Link className="mr-sm-2" style={{'paddingRight':'150px'}}>
                        <select className="select"> 
                        <option value="">For You</option> 
                        <option>Find Matching Internships</option> 
                        <option >Hire right talent</option> 
                        <option >Work from Home</option> 
                        </select> 
                    </Nav.Link>
                    <Nav.Link style={{'display':'block'}}>
                        <img src={InstantLogo} alt="Thunder"/>
                        <Link to='/' style={{'textDecoration':'none','color':'black'}}>Instant Apply</Link>
                    </Nav.Link>
                    
                    <Nav.Link style={{'display':'block'}}>
                        <Link to='/' style={{'textDecoration':'none','color':'black'}}>Pricing</Link>
                    </Nav.Link>
                    
                    <Nav.Link>
                        <Link to='/' style={{'textDecoration':'none','color':'black'}}>About us</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to='/signup' style={{'color':'#7ECB20','textDecoration':'none'}}>
                        <button type="button" className="nav-item signup" data-toggle="modal" data-target="#myModal">
                        Sign Up
                        </button>
                        </Link>
                    </Nav.Link>
                    <Nav.Link >
                        <Link to='/login' style={{'color':'#7ECB20','textDecoration':'none'}} >
                        <button type="button" className="login nav-item" data-toggle="modal" data-target="#myModal">
                        LOGIN
                        </button>
                        </Link>
                    </Nav.Link>
                </Fragment>
            </Nav>
        </Navbar>
        <Switch>
            <Route path='/login' exact component={Login}/>
            <Route path='/' exact component={LandingPage}/>
            <Route path='/signup'  exact component={Signup}/>
            <Route path='/verify' exact component={VerifyOTP} />
            
        </Switch>
    </div>        
)}

export default Navbars;