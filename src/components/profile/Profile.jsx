import React from "react";
import axios from "axios" // send data to server
import Joi from "joi"; // import joi library to use joi
// import { Link } from "react-router-dom";
import { joiResolver } from "@hookform/resolvers/joi"; // front end react validation
import { toast } from "react-toastify"; // pop-up message success/failure ...
import { useForm } from "react-hook-form"; // handles form input in client
import { useNavigate } from "react-router-dom";


import styles from '../stylesheets/form.module.scss'


const schema = Joi.object ({
    fullName: Joi.string().min(3).max(30).label("Full Name"),
    preferredName: Joi.string().min(3).max(30).label("Preferred Name"),
    email: Joi.string().trim().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }).label("Email")
})

function Profile(props) {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm({
        resolver: joiResolver(schema),
        defaultValues: {
          
            fullName: "database.fullName",
            preferredName: "database.preferredName",
            email: "database.email",
       
        },
    });

    async function onSubmit(data) {
        console.log("data: ", data);

        try {
            let response =  await axios.post(`http://localhost:8000/api/v1/users/profile`, data)

            if(response.error) {
                toast.error(response.error)
                return
            }
            
            const token = response.data.token

            toast.success(`Profile update Successful!`)

            localStorage.setItem("user_token", token)

            navigate("/")
        } catch (error) {
            console.log(error.response)
            toast.error("Unable to update profile. Please try again later.")
        }
    }

    console.log("errors: ", errors);

    return (
        <>
            <div className="container my-5">
                <div className="row">

                    <div className="col-2">
                        {/* <Account tag />
                        <Saved Listings tag />
                        <Order History tag /> */}
                    </div>

                    <div className="col-10">
                        <div className="p-3">
                            <h5 className="mb-4 d-flex justify-left">User Details</h5>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className={styles["form-group"]}>
                                    <label className={styles['form-label']} for="fullName">Full Name</label>
                                    <input
                                        type="string"
                                        className="form-control"
                                        id="fullName"
                                        // {...userModel("fullName")}
                                        placeholder="database.fullName"
                                    />
                                    <p className={styles['form-error-message']}>{errors.fullName?.message}</p>
                                </div>
                                <div className={styles["form-group"]}>
                                    <label className={styles['form-label']} for="preferredName">Preferred Name</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        {...register("password")}
                                        placeholder="********"
                                    />
                                    <p className={styles['form-error-message']}>{errors.password?.message}</p>
                                </div>
                                <div className="d-grid gap-2">
                                    <button className="btn btn-primary" type="submit">Button</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
