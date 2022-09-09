import React from "react";
// import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import ImageComponent from "../image-component/ImageComponent";
import loginImg from "../login/refreshing_beverage_td3r.svg";

import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

const schema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .label("Email")
        .required(),
    password: Joi.string().min(3).label("Password").required(),
});

function Login(props) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: joiResolver(schema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    function onSubmit(data) {
        console.log("data: ", data);
    }

    console.log("errors: ", errors);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-8 border border-primary">
                        <img src={ImageComponent(loginImg)} alt="login.img" />
                    </div>
                    <div className="col-sm-4 border border-danger">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label for="email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    {...register("email")}
                                    placeholder="email"
                                />
                                <p>{errors.email?.message}</p>
                            </div>
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    {...register("password")}
                                    placeholder="Password"
                                />
                                <p>{errors.password?.message}</p>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
