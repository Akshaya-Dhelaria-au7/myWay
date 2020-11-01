import React , { Component } from 'react';
import {Link ,Switch,Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchSignupApi} from '../../Redux/Action/userAction'
import {Modal} from 'react-bootstrap'

class Signup extends Component{
    state={
        First_Name:'',
        Last_Name:'',
        Email:'',
        Password:'',
        error:'',
        show:false,
        hide:true
    }

    changeHandler = (event) => {
        const {name,value} = event.target
          this.setState({
            [name]:value,
            error:''
        })  
    }

    submitHandler = (event) => {
        this.props.fetchSignupApi(this.state)
        setTimeout(() => {
            const {error} = this.props.state
            this.setState({
                 error:error
             })
            console.log("error in signup" , this.state.error)
            if(error.length>0){
                this.props.history.push('/signup')
            }else{
                this.props.history.push('/verify')
            }
        },1000)
        event.preventDefault()
    }

    render(){
        const {First_Name,Last_Name,Email,Password,error} = this.state
        // const {error} = this.props.state
        console.log(error)
        const enableButton = First_Name.length>5 && Email.includes('@') && Email.includes('.') && Password.length>5 
        return(
            <div className="container">
            <form className="form-group" onSubmit={this.submitHandler}>
            <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-body" style={{'paddingTop':'12vh'}}>
                <button type="button" className="close" data-dismiss="modal">&times;</button>

                    <h3 className="modal-title">Sign Up</h3>
                    <p className="modal-title">It's quick and easy</p>
                   <br/>
                   <br/>
                    <div style={{'float':'left','position':'relative','width':'25%','display':'flex','flexDirection':'column','left':'100px'}}> 
                    <input name="First_Name" type="text" placeholder="First Name" value={First_Name} onChange={this.changeHandler} />
                    {
                        First_Name.length === 0 ? <span></span> : First_Name.length<6 && First_Name.length>0 ? <p className="para" style={{color:'red','position':'relative'}}>Minimum 6 letters</p>: <span></span>
                    }
                    </div>
                    <div style={{'float':'right','position':'relative','width':'25%','display':'flex','flexDirection':'column','right':'100px'}}>
                    <input name="Last_Name" type="text" placeholder="Last Name" value={Last_Name} onChange={this.changeHandler} />
                    {
                    Last_Name.length === 0 ? <span></span> : Last_Name.length<6 && Last_Name.length>0 ? <p className="para" style={{color:'red','width':'100%'}}>Minimum 6 letters</p>: <span></span>
                    }
                    </div>
                    <br />
                    <br/>
                    <br/>
                    <br />
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
                    <br />
                    <button className="button" style={{'backgroundColor':'#7ECB20','color':'white','width':'21vw','height':'40px','borderRadius':'10px'}} disabled={!enableButton}>Sign Up</button>
                    <br/>
                    <br/>
                    </div>
                    
                </div>
                </div>
            </div>
            </form>
            </div>
        )
    }
}

const mapToProps = (state) => {
    console.log("Signup state is ",state)
    return{
        state : state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSignupApi: (userData) => dispatch(fetchSignupApi(userData)) 
    }
}

export default connect(mapToProps , mapDispatchToProps)(Signup);