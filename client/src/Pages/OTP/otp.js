import React,{Component} from 'react';
import Axios from 'axios';
import {Backend_Url} from '../../Backend_Deployed/backend_deployed'
import {connect} from 'react-redux'
import './otp.css'

class Verifyotp extends Component{
	state={
		OTP:'',
		error:''
	}

	callingOTPapi = async () => {
		await Axios.post(`${Backend_Url}/verifyotp` , {
            OTP: this.state.OTP
		})
        .then((data) => this.props.history.push('/login'))
		.catch((err) => this.setState({error:err.response.data.message}))
	}

	otpHandler = (event) => {
		const {name,value} = event.target
		this.setState({
            [name]:value
        })
	}

	closeHandler = (event) => {
		event.preventDefault()
		this.props.history.push('/')
	}

	otpSubmitHandler = (event) => {
		this.callingOTPapi()
		event.preventDefault()
	}

	render(){
        console.log("Props in verify otp" , this.props.state.user)
        const {Email} = this.props.state.user
		const {OTP,error} = this.state
		const otpButtonDisable = OTP.length<6
		return(
			<div className="modal fade" id="myModal" style={{'display':'flex','opacity':'1','paddingTop':'150px'}}>
				<div className="modal-dialog">
					<div className="modal-content" style={{'border':'none'}}>
						<div className="modal-body" style={{'paddingTop':'12vh','border':'2px solid #F5F5F5','borderRadius':'32px'}}>
						
							<button type="button" className="close" onClick={this.closeHandler} data-dismiss="modal">&times;</button>
							<label>OTP sent!</label>
							<div className = "otp">
							
							{
								error && <div className="alert alert-danger" role="alert" style={{justifyContent:'center'}}>
								{error} or signup with correct Email ID.
								</div> 
							}
							</div>
							<br />
							
							<input style={{'border':'2px solid #F5F5F5','width':'100%'}} className="otp-input" placeholder="Enter your OTP" type="text" name="OTP" value={OTP} onChange={this.otpHandler}/>
							<br />
							<p>One time passcode sent to your email-id - {Email}</p>
							
							<br />
							<button className="otp-button" onClick={this.otpSubmitHandler} disabled={otpButtonDisable}>Enter</button>
							<br/>
							<br/>
							<br/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
    console.log("Otp" , state)
    return{
        state:state
    }
}

export default connect(mapStateToProps)(Verifyotp);