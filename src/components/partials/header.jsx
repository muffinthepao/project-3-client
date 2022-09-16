import { NavLink, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { toast } from "react-toastify"; 
import jwt_decode from 'jwt-decode'

import styles from './header.module.scss'
import Logout from "../logout/Logout";


function Header() {

    const navigate = useNavigate()

    //get user token to show "Profile" rather than "Login/Register"
    const token = localStorage.getItem("user_token")

    const user = token? (jwt_decode(token)) : null


    function Logout() {

        localStorage.removeItem("user_token")
        navigate('/beverages')
        toast.success("Logout Successful!")
        console.log("wow")
    
    
    }

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                
                <NavLink to="/" className="navbar-brand">
                    <FontAwesomeIcon className={styles["mug"]} icon={icon({name: 'mug-saucer', style: 'solid', color: 'blue'})} /> 
                    Quench
                </NavLink>
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
                    <div className="d-flex align-items-center"> 
                        <NavLink to="/cart">
                            <button type="button" class="btn btn-light">
                                <FontAwesomeIcon className="mx-1 px-1" icon={icon({name: 'shopping-cart', style: 'solid' })} />
                                <span class="badge text-bg-secondary mx-1">4</span>
                            </button>
                        </NavLink>
                    
                    </div>
                        {token ? (
                            <>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        {user.data.email}
                                    </button>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li><NavLink to="/profile" class="dropdown-item">Account</NavLink></li>
                                        <li><a class="dropdown-item">History</a></li>
                                        <li><hr class="dropdown-divider"/></li>
                                        <li onClick={Logout} class="dropdown-item">Logout</li>
                                    </ul>
                                </div>
                            </>
                        ):(
                        <>
                            <button className="btn" type="button">
                                <NavLink to="/login" className="nav-link">Login</NavLink>
                                
                            </button>
                            <button className="btn btn-primary" type="button">
                                <NavLink to="/register" className="nav-link">Register</NavLink>
                            </button>
                        </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
