import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "green"
    };

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <NavLink to="/">
                        <img src={logo} alt="" />
                    </NavLink>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink class="nav-link" activeStyle={activeStyle} to="/home">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" activeStyle={activeStyle} to="/services">Services</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" activeStyle={activeStyle} to="/about">About</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink class="nav-link" activeStyle={activeStyle} to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <button class="btn btn-outline-success" type="submit">Sign In</button>
                            <button class="btn btn-outline-success" type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;