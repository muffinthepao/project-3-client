import React from "react";
// import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import ImageComponent from "../image-component/ImageComponent";
import RegisterImg from "../register/refreshing_ncum.svg";

function Register(props) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    function onSubmit(data) {
        console.log("data: ", data);
    } 

    console.log("errors: ", errors)

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 border border-primary">
                        <img
                            src={ImageComponent(RegisterImg)}
                            alt="register.img"
                        />
                    </div>
                    <div className="col-sm-4 border border-danger">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label for="fullName">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="fullName"
                                    {...register("fullName", {required: true, minLength: 3})}
                                    placeholder="John Doe"
                                    default="John Doe"
                                />
                            </div>
                            <div className="form-group">
                                <label for="preferredName">
                                    Preferred Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="preferredName"
                                    {...register("preferredName", {required: true, minLength: 3})}
                                    placeholder="John"
                                    default="John"
                                />
                            </div>
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    {...register("email", {required: true})}
                                    placeholder="abc@email.com"
                                    default="abc@email.com"
                                />
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    {...register("password", {required: true, minLength: 3})}
                                    placeholder="********"
                                    default="123"
                                />
                            </div>
                            <div className="form-group">
                                <label for="confirmPassword">
                                    Confirm Password
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="confirmPassword"
                                    {...register("confirmPassword", {required: true, minLength: 3})}
                                    placeholder="********"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
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
