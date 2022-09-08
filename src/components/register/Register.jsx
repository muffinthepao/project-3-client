import React from "react";
// import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

import ImageComponent from "../image-component/ImageComponent";
import RegisterImg from "../register/refreshing_ncum.svg";

const schema = Joi.object({
    fullName: Joi.string().min(3).max(140).label("Full Name").required(),
    preferredName: Joi.string().min(3).max(60).label("Preferred Name").required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }).label("Email").required(),
    password: Joi.string().min(3).label("Password").required(),
    confirmPassword: Joi.any().valid(Joi.ref("password")).required().messages({
        "any.only": '"Passwords" must match',
    }),
});

function Register(props) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: joiResolver(schema),
        defaultValues: {
            fullName: "",
            preferredName: "",
            email: "",
            password: "",
            confirmPassword: "",
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
                    <div className="col-sm-8 border border-primary">
                        <img
                            src={ImageComponent(RegisterImg)}
                            alt="register.img"
                        />
                    </div>
                    <div className="col-sm-4 border border-danger">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label for="fullName" className="d-flex justify-left">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="fullName"
                                    {...register("fullName")}
                                    placeholder="John Doe"
                                />
                                <p>{errors.fullName?.message}</p>
                            </div>
                            <div className="form-group">
                                <label for="preferredName">Preferred Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="preferredName"
                                    {...register("preferredName")}
                                    placeholder="John"
                                />
                                <p>{errors.preferredName?.message}</p>
                            </div>
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    {...register("email")}
                                    placeholder="abc@email.com"
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
                                    placeholder="********"
                                    default="123"
                                />
                                <p>{errors.password?.message}</p>
                            </div>
                            <div className="form-group">
                                <label for="confirmPassword">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="confirmPassword"
                                    {...register("confirmPassword")}
                                    placeholder="********"
                                />
                                <p>{errors.confirmPassword?.message}</p>
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
