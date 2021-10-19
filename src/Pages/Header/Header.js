import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import logo from '../../images/logo.png';
import useAuth from '../../Hooks/useAuth'

const Header = () => {
    const { user, logOut } = useAuth();
    const activeStyle = {
        fontWeight: "bold",
        color: "green"
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <NavLink to="/">
                        <img src={logo} alt="" />
                    </NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" activeStyle={activeStyle} to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeStyle={activeStyle} to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeStyle={activeStyle} to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeStyle={activeStyle} to="/doctors">Doctors</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" activeStyle={activeStyle} to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <small>{user?.displayName}</small>
                        {user.displayName ?
                            <button onClick={logOut} className="btn btn-outline-success ms-2">Sign Out</button> :
                            <NavLink to="/sign-in"><button className="btn btn-success me-2" type="submit" >Sign In</button></NavLink>
                        }

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
