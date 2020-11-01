import React , { Component } from 'react';
import {connect} from 'react-redux'
import {fetchLoginApi} from '../../Redux/Action/userAction'
import { Route,Link,Switch } from 'react-router-dom';
import Signup from '../Signup/signup'

class Login extends Component{
    state={
        user:{},
        Email:'',
        Password:'',
        error:''
    }

    changeHandler = (event) => {
        const {name,value} = event.target
        this.setState({
            [name]:value,
            error:''
        })
    }

    submitHandler = (event) => {
        this.props.fetchLoginApi(this.state)
        setTimeout(() => {
             const {error} = this.props.state
             this.setState({
                 error:error
             })

            // console.log("error in login" , error)
            if(error.length>0){
                this.props.history.push('/login')
            }else{
                this.props.history.push('/')
            }
        },2000)
        event.preventDefault()
    }

    render(){
        console.log("props in login" , this.props)
        const {Email,Password,error} = this.state
        // const {error} = this.props.state
        console.log(error)
        const enableButton = Email.includes('@') && Email.includes('.') && Password.length>5 
        return(
            <div className="container">
            <form className="form-group" onSubmit={this.submitHandler}>
            <div className="modal fade" id="myModal">
                <div className="modal-dialog" style={{'position':'fixed','right':0,'top':'0px'}}>
                <div className="modal-content">
                <div className="modal-body" style={{'paddingTop':'12vh','height':'700px','width':'342px'}}>
                <button type="button" className="close" data-dismiss="modal">&times;</button>

                    <h3 className="modal-title">Login</h3>
                   <br/>
                   <div style={{'border':'2px solid #F5F5F5'}}>
                   <br/>
                   <p style={{'color':'#7ECB20'}}>Student</p>
                   <hr style={{'width':'100px'}}/>
                   <br/>
                    <input name="Email" type="email" placeholder="Email" value={Email} onChange={this.changeHandler}/>
                    {
                        Email.length === 0 ? <span></span> : Email.length<6 || !Email.includes('@') || !Email.includes('.')  ? <p className="para" style={{color:'red'}}>Email should be valid</p> : error.length>0 ? <p className="para" style={{color:'red'}}>{error}</p> : <span></span>
                    }
                    <br />
                    <br />
                    <input placeholder="Password" type="password" name="Password" value={Password} onChange={this.changeHandler}/>
                    {
                        Password.length === 0 ? <span></span> : Password.length<6 && Password.length>0 ? <p className="para" style={{color:'red'}}>Password should be more than 5 characters</p> : <span></span>
                    }
                    <br />
                    <br/>
                    <label style={{'color':'#7ECB20','fontSize':'15px','right':0}}>Forgot Password?</label>
                    <br />
                        <button className="button" style={{'backgroundColor':'#7ECB20','color':'white','width':'21vw','height':'40px','borderRadius':'10px','boxShadow':'none'}} disabled={!enableButton}>Login</button>
                        <br/>
                        <br/>
                        <p className="para">New to MyWays?<Link to='/signup' style={{'color':'black !important'}}> Sign Up Here</Link><Switch><Route path='/signup' exact /></Switch></p>                   
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        state : state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLoginApi: (userData) => dispatch(fetchLoginApi(userData)) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);