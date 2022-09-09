
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' 



function Header() {
    //get user token to show "Profile" rather than "Login/Register"

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                
                <NavLink to="/" className="navbar-brand"><FontAwesomeIcon icon={icon({name: 'mug-saucer', style: 'solid'})} /> Quench</NavLink>
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
                    
                    <FontAwesomeIcon icon={icon({name: 'shopping-cart', style: 'solid'})} />


                
                        
                            <button className="btn" type="button">
                                <NavLink to="/login" className="nav-link">Login</NavLink>
                                
                            </button>
                            <button className="btn btn-primary" type="button">
                                <NavLink to="/register" className="nav-link">Register</NavLink>
                            </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
