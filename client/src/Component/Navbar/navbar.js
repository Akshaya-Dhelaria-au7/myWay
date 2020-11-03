import React,{Component,Fragment} from 'react';
import './navbar.css'
import {Link,Route,Switch} from 'react-router-dom'
import Signup from '../../Pages/Signup/signup';
import VerifyOTP from '../../Pages/OTP/otp';
import Login from '../../Pages/Login/login';
import LandingPage from '../../Pages/Landing_Page/landing_page'
import Logo from './MyWays Logo.png'
import InstantLogo from './Instant_logo.png'
import {Navbar,Nav} from 'react-bootstrap'

class Navbars extends Component{
    state = {
        count:0,
        width : 0,
        height: 0,
        clicked: false,
        hide:true
    }

    componentDidMount(){
        this.windowDimension()
        window.addEventListener('resize',this.windowDimension)
    }

    componentWillUnmount(){
        window.removeEventListener('resize',this.windowDimension)
    }

    windowDimension = () => {
        this.setState({
            width:window.innerWidth,
            height:window.innerHeight
        })
    }

    handleClick = () => {
        this.setState({clicked:true})
    }

    render(){
    return (
        <div>
            {
            this.state.width >= 768 ?
            <Navbar className="Navbar" style={{'backgroundColor':'white'}}> 
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
        : 
        <Navbar className="nav-small" style={{'backgroundColor':'white'}}>
            <Fragment>
            <Navbar.Brand>
                <img className="logo" src={Logo} alt="Logo"/>
            </Navbar.Brand>
            <div className = 'menu-icon' onClick={this.handleClick}>
                <i className={this.state.clicked == true ? 'fa fa-close' : 'fa fa-bars'}  />
            </div>
            {
                this.state.clicked == true &&
                <Nav className="ul-mobile">
                <div>
                 <Nav.Link style={{'display':'block'}}>
                        <img src={InstantLogo} alt="Thunder"/>
                        <Link to='/'className="each-item" style={{'textDecoration':'none','color':'black'}} >Instant Apply</Link>
                    </Nav.Link>
                </div>
                <br/>
                <br/>
                <div>
                    <Nav.Link style={{'display':'block'}}>
                        <Link to='/'className="each-item-pricing" style={{'textDecoration':'none','color':'black'}}>Pricing</Link>
                    </Nav.Link>
                </div>
                <div>
                    <Nav.Link>
                        <Link to='/'className="each-item-about-us" style={{'textDecoration':'none','color':'black'}}>About us</Link>
                    </Nav.Link>
                </div>
                <Nav.Link className="each-item-for-you" style={{'paddingRight':'150px','color':'black'}}>
                        <select className="select"> 
                        <option value="" style={{'color':'black'}}>For You</option> 
                        <option style={{'color':'black'}}>Find Matching Internships</option> 
                        <option style={{'color':'black'}}>Hire right talent</option> 
                        <option style={{'color':'black'}}>Work from Home</option> 
                        </select> 
                </Nav.Link>
            </Nav>
         }
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
        </Navbar>
        }
        <Switch>
            <Route path='/login' exact component={Login}/>
            <Route path='/' exact component={LandingPage}/>
            <Route path='/signup'  exact component={Signup}/>
            <Route path='/verify' exact component={VerifyOTP} />
            
        </Switch>
    </div>        
)
}
}

export default Navbars;

