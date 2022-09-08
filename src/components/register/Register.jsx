import React from "react";
// import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import ImageComponent from "../image-component/ImageComponent";
import RegisterImg from "../register/refreshing_ncum.svg";

function Register(props) {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 border border-primary">
                        <img src={ImageComponent(RegisterImg)} alt="register" />
                    </div>
                    <div class="col-sm-4 border border-danger">
                        <form>
                            <div class="form-group">
                                <label for="fullName">Full Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="fullName"
                                    name="fullName"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div class="form-group">
                                <label for="preferredName">Preferred Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="preferredName"
                                    name="preferredName"
                                    placeholder="John"
                                />
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="abc@email.com"
                                />
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="********"
                                />
                            </div>
                            <div class="form-group">
                                <label for="confirmPassword">
                                    Confirm Password
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="********"
                                />
                            </div>
                            <button type="submit" class="btn btn-primary">
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
