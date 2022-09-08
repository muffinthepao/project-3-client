import React from "react";
// import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import ImageComponent from "../image-component/ImageComponent";
import loginImg from "../login/refreshing_beverage_td3r.svg"

function Login (props) {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-8 border border-primary">
                        <img src={ImageComponent(loginImg)} alt="login"/>
                    </div>
                    <div class="col-sm-4 border border-danger">
                        <form>
                            <div class="form-group">
                                <label for="email" >Email address</label>
                                <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="email"/>
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" id="password" placeholder="Password"/>
                            </div>
                            <button type="submit" class="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
