import React from 'react'
import ReactDom from 'react-dom'
import {ipcRenderer} from 'electron'

import Logo from '../Logo/'
import ElectronImg from '../../../assets/img/electron.png'
import ReactImg from '../../../assets/img/react.png'
import WebpackImg from '../../../assets/img/webpack.png'

const logos = [
    ElectronImg,
    ReactImg,
    WebpackImg
]

export default class Login extends React.Component{
	constructor(props){
		super(props)
		this.handleLogin = this.handleLogin.bind(this)
		this.handleEmailChange = this.handleEmailChange.bind(this)
		this.handlePasswordChange = this.handlePasswordChange.bind(this)
		this.state = {
			email : "",
			password : ""
		}
	}

	handleEmailChange(event){
		this.setState({email : event.target.value})
	}

	handlePasswordChange(event){
		this.setState({password : event.target.value})
	}

	handleLogin(event){
		var loginResult = ipcRenderer.sendSync('login', this.state) 
		this.props.onLoginStateChange(loginResult.successfull) 
	}

	render(){
		const logosRender = logos.map( (logo, index) => {
            return <Logo key = {index} src = { logo } />
        })

		return(
			<div>
				{logosRender}
				<div className="hello">
                    <h1>Hello React!</h1>
                </div>
				<form onSubmit={this.handleLogin}>
					<span> Username: </span>
					<input type="text" value={this.state.email} onChange={this.handleEmailChange}></input>
					<br/>
					<span> Password: </span>
					<input type="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
					<br/>
					<button type="submit"> Login </button>	
				</form>
			</div>
		)
	}
} 

