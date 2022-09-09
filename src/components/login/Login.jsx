import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";

import styles from '../stylesheets/form.module.scss'
import ImageComponent from "../image-component/ImageComponent";
import loginImg from "../login/refreshing_beverage_td3r.svg";


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
            <div className="container my-5">
                <div className="row">

                    <div className="col-7">
                        <img  src={ImageComponent(loginImg)} alt="login.img" />
                    </div>

                    <div className="col-sm-5 rounded-4 border bg-light">
                        <div className="p-3">
                            <h5 className="mb-4 d-flex justify-right">REGISTER</h5>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className={styles["form-group"]}>
                                    <label className={styles['form-label']} for="email">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        {...register("email")}
                                        placeholder="email"
                                    />
                                    <p className={styles['form-error-message']}>{errors.email?.message}</p>
                                </div>
                                <div className={styles["form-group"]}>
                                    <label className={styles['form-label']} for="password">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        {...register("password")}
                                        placeholder="Password"
                                    />
                                    <p className={styles['form-error-message']}>{errors.password?.message}</p>
                                </div>
                                <div class="d-grid gap-2">
                                    <button class="btn btn-primary" type="submit">Button</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
