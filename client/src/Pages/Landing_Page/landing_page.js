import React, { Fragment } from 'react';
import './landing_page.css'
import {Redirect, Switch,Route} from 'react-router-dom'
import Signup from '../Signup/signup'

function LandingPage(){
    const clickHandler = (props) => {
        <Switch ><Route to='/signup' exact component={Signup}></Route></Switch>
        // <Redirect to='/signup' exact/>
        // props.histroy.push('/signup')
    }
    return(
        <Fragment>
        <div className="div-class">
            <h3 className="heading">Apply and hear back everytime</h3>
        </div>
        <br/>
        <div className="paragraph">
        <p>Exploring internships or jobs? Say good-bye to the typical job portals and use the power of Artificial Intelligence to become successful, faster.</p>
        </div>
        <br/>
        <button className="landing_page_button" onClick={clickHandler}>Get Started</button>
        </Fragment>
    )
}

export default LandingPage;