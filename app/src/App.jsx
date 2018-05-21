import React, {Component} from 'react'
import {render} from 'react-dom'

import Login from './js/components/Login/'
import DashBoard from './js/components/DashBoard/'
import Purchase from './js/components/Purchase'

export default class App extends Component {
    constructor(props){
        super(props)
        this.handleLoginState = this.handleLoginState.bind(this)
        this.state = {
            isLoggedIn : false
        }
    }

    handleLoginState(state){
        this.setState({isLoggedIn : state})
    } 

    render() {
        return (
            <div>
                 {this.state.isLoggedIn ? <DashBoard /> : <Login onLoginStateChange={this.handleLoginState}/>}                   
            </div>
        )
    }
}

//{this.state.isLoggedIn ? <DashBoard /> : <Login onLoginStateChange={this.handleLoginState}/>}
