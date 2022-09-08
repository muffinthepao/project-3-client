import React from "react";
// import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import ImageComponent from "../image-component/ImageComponent";
import loginImg from "../login/refreshing_beverage_td3r.svg"

function Login (props) {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-8 border border-primary">
                        <img src={ImageComponent(loginImg)} alt="login.img"/>
                    </div>
                    <div className="col-sm-4 border border-danger">
                        <form>
                            <div className="form-group">
                                <label for="email" >Email address</label>
                                <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="email"/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Password"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
