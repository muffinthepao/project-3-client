// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

import { NavLink } from "react-router-dom";


function Header() {
    //get user token to show "Profile" rather than "Login/Register"

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">Quench</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/beverages" className="nav-link">Beverages</NavLink>
                        </li>
                    </ul>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <form className="d-flex" role="search">
                            <button className="btn btn-outline-primary" type="button">Login</button>
                            <button className="btn btn-primary" type="button">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
