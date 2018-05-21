import React from 'react'
import ReactDom from 'react-dom'

import Home from '../Home'
import Account from '../Account'
import Purchase from '../Purchase'
import Sale from '../Sale'
import Transaction from '../Transaction'
import GenerateReport from '../GenerateReport'
import Logout from '../Logout'


import {Link, Route} from 'react-router-dom'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-Bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

export default class Dashboard extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<div>
				<Navbar fixedTop fluid inverse collapseOnSelect>
				  <Navbar.Header>
				    <Navbar.Brand>
				      <a>Bill Manager</a>
				    </Navbar.Brand>
				    <Navbar.Toggle />
				  </Navbar.Header>
				  <Navbar.Collapse>
				    <Nav>
				      <LinkContainer to="/">
              			<NavItem>Home</NavItem>
            		  </LinkContainer>
            		  <LinkContainer to="/Account">
              			<NavItem>Account</NavItem>
            		  </LinkContainer>
            		  <LinkContainer to="/Purchase">
              			<NavItem>Purchase</NavItem>
            		  </LinkContainer>
            		  <LinkContainer to="/Sale">
              			<NavItem>Sale</NavItem>
            		  </LinkContainer>
            		  <LinkContainer to="/Transaction">
              			<NavItem>Transaction</NavItem>
            		  </LinkContainer>
            		  <LinkContainer to="/GenerateReport">
              			<NavItem>GenerateReport</NavItem>
            		  </LinkContainer>
				    </Nav>
				    <Nav pullRight>
				      <LinkContainer to="/Logout">
              			<NavItem>Logout</NavItem>
            		  </LinkContainer>
				    </Nav>
				  </Navbar.Collapse>
				</Navbar>

				<Route exact path="/" component={Home} />
		      	<Route path="/Account" component={Account} />
		      	<Route path="/Purchase" component={Purchase} />
		      	<Route path="/Sale" component={Sale} />
		      	<Route path="/Transaction" component={Transaction} />
		      	<Route path="/GenerateReport" component={GenerateReport} />
		      	<Route path="/Logout" component={Logout} />
			</div>				
		)
	}
   
}
