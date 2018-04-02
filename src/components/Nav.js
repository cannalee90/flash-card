import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
 } from 'reactstrap';
import { Link } from 'react-router-dom';
import NavLinkItem from './NavLinkItem';

export default class NavbarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  
  toggle =() => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    const { isOpen } = this.state;
    return(
      <Navbar color='faded' light expand='md'>
        <NavbarBrand href='/'>reactstrap</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavLinkItem
              className='nav-link'
              to='/list'
              text='List'
              />
            <NavLinkItem
              className='nav-link'
              to='/new'
              text='New Card'
              />
            <NavLinkItem
              className='nav-link'
              to='/check'
              text='Check'
              />
            <NavLinkItem
              className='nav-link'
              to='https://github.com/cannalee90/flash-card'
              text='Github'
              />
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}