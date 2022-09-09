import React from "react";
// import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi"; 

// import validators from "../validators/formValidators"
import styles from '../stylesheets/form.module.scss'
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

// const schema = validators.registerValidator

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
            <div className="container my-5">
                <div className="row">
                    <div className="col-sm-7">
                        <img id={styles["register-image"]} src={ImageComponent(RegisterImg)} alt="register.img"/>
                    </div>

                    <div className="col-sm-5 rounded-4 border bg-light bg-sm-none">
                        <div className="p-4">
                            <h5 className="mb-4 d-flex justify-right">REGISTER</h5>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className={styles["form-group"]}>
                                    <label for="fullName" className={styles['form-label']}>Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fullName"
                                        {...register("fullName")}
                                        placeholder="John Doe"
                                    />
                                    <p className={styles['form-error-message']}>{errors.fullName?.message}</p>
                                </div>
                                <div className={styles["form-group"]}>
                                    <label className={styles['form-label']} for="preferredName">Preferred Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="preferredName"
                                        {...register("preferredName")}
                                        placeholder="John"
                                    />
                                    <p className={styles['form-error-message']}>{errors.preferredName?.message}</p>
                                </div>
                                <div className={styles["form-group"]}>
                                    <label className={styles['form-label']} for="email">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        {...register("email")}
                                        placeholder="abc@email.com"
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
                                        placeholder="********"
                                        default="123"
                                    />
                                    <p className={styles['form-error-message']}>{errors.password?.message}</p>
                                </div>
                                <div className={styles["form-group"]}>
                                    <label className={styles['form-label']} for="confirmPassword">Confirm Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="confirmPassword"
                                        {...register("confirmPassword")}
                                        placeholder="********"
                                    />
                                    <p className={styles['form-error-message']}>{errors.confirmPassword?.message}</p>
                                </div>
                                <div class="d-grid gap-2">
                                    <button class="btn btn-primary" type="submit">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
