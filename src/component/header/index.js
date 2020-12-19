import React, { Component } from 'react';
import './style.css';
import {Navbar, NavbarBrand, NavbarToggler,NavItem,Nav,Collapse,Badge} from 'reactstrap';
import {NavLink,Link} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isNavOpen: false
        };
    }

    toggleNav(event) {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render(){
        return (
            <Navbar className="navbar-site" sticky="top" expand="md">
                        <div className="container">
                            <NavbarBrand className="mr-auto brand"><Link to='/home' className="brandLink">Cosology</Link></NavbarBrand>
                            <NavbarToggler onClick={(event) => this.toggleNav(event)} ><i className={!this.state.isNavOpen ? "fa fa-bars" : "fa fa-times"} id="toggleButton"></i></NavbarToggler>
                            <Collapse navbar isOpen={this.state.isNavOpen}>
                                <Nav className="ml-auto" navbar>
                                    <NavItem >
                                        <NavLink className="nav-link" to="/" onClick={(event) => this.toggleNav(event)}>
                                             Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem >
                                        <NavLink className="nav-link" to="/blog" onClick={(event) => this.toggleNav(event)}>
                                             Blog
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/Shop" onClick={(event) => this.toggleNav(event)}>
                                            Shop
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/gallery" onClick={(event) => this.toggleNav(event)}>
                                             Gallery
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/contactus" onClick={(event) => this.toggleNav(event)}>
                                            Contact Us
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/login" onClick={(event) => this.toggleNav(event)}>
                                            <span><i className="fa fa-user navbar-icons" ></i></span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/cart" onClick={(event) => this.toggleNav(event)}>
                                            <span><i className="fa fa-shopping-cart navbar-icons" ><Badge color="danger" pill>2</Badge></i></span>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </div>
                    </Navbar>
        )
    }
}

export default Header;

