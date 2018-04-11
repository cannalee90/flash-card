import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavLinkItem from './NavLinkItem';

class NavbarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location.pathname != newProps.location.pathname) {
      this.setState({
        isOpen: false,
      });
    }
  }

  toggle =() => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    const { isOpen } = this.state;
    const { user } = this.props;
    return(
      <div className='container'>
          <Navbar color='faded' light expand='lg'>
            <NavbarBrand href='/list'>Flashcard</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={isOpen} navbar style={{justifyContent: 'space-between'}}>
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
                  target={'_flashcard'}
                />
              </Nav>
              {user.signIn && <Nav navbar>
                <NavItem>
                  <NavLinkItem text='signout' className='nav-link'/>
                </NavItem>
              </Nav>}
            </Collapse>
          </Navbar>
      </div>
    );
  }
}

function mapStateToProps({user}) {
  return {
    user,
  }
}

export default withRouter(connect(mapStateToProps, null)(NavbarComponent))