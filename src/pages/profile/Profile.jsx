import React, { useEffect, useState } from "react"
import axios from "axios" // send data to server
import Joi from "joi" // import joi library to use joi
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import { joiResolver } from "@hookform/resolvers/joi" // front end react validation
import { toast } from "react-toastify" // pop-up message success/failure ...
import { useForm } from "react-hook-form" // handles form input in client
import { useNavigate } from "react-router-dom"

import styles from "../../components/stylesheets/form.module.scss"

const schema = Joi.object({
  fullName: Joi.string().min(3).max(30).label("Full Name"),
  preferredName: Joi.string().min(3).max(30).label("Preferred Name"),
  email: Joi.string()
    .trim()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .label("Email"),
})

const baseURL = "http://localhost:8000/api/v1/profile"
const userData = JSON.parse(localStorage.getItem("user_data"))

// function Profile(props) {
//       const {userId} = useParams();
//       const [users, setUser] = useState([]);

//       useEffect(() => {
//           const axiosCall = async () => {
//             const response = await axios.get(`${baseURL}/${userId}`)
//             setUser(response.data)
//           }

//           axiosCall()

//          },[userId]);

//          console.log("users: ", users);

//       return (
//           <>
//               <div>
//                   <h4>User ID: {userId}</h4>

//                   <h5>Full Name: {users.fullName}</h5>
//                   <h5>Preferred Name: {users.PreferredName}</h5>
//                   <h5>Email: {users.email}</h5>

//               </div>
//           </>
//       )
//   }
  function Profile(props) {
    const navigate = useNavigate()
    const {
      register,
      handleSubmit,
      // watch,
      formState: { errors },
    } = useForm({
      resolver: joiResolver(schema),
      defaultValues: {
        fullName: `${userData.fullName}`,
        preferredName: `${userData.preferredName}`,
        email: `${userData.email}`,
      },
    })

    async function onSubmit(data) {
      console.log("data: ", data)

      try {
        let response = await axios.post(
          `http://localhost:8000/api/v1/users/profile`,
          data
        )

        if (response.error) {
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

    console.log("errors: ", errors)

    console.log(userData)

    return (
      <>
        <div className="container my-5">
          <div className="row">
            <div className="col-2">
              <div class="d-flex gap-3 flex-column mt-4">
                <a
                  href="/profile"
                  class="btn btn-primary btn-dark btn-lg px-4 me-md-2"
                >
                  Account
                </a>
                <a
                  href="/savedListings"
                  class="btn btn-primary btn-dark btn-lg px-4 me-md-2"
                >
                  Saved Listings
                </a>
                <a
                  href="/orderHistory"
                  class="btn btn-primary btn-dark btn-lg px-4 me-md-2"
                >
                  Order History
                </a>
              </div>
            </div>

            <div className="col-4">
              <div className="p-3">
                <h5 className="mb-4 d-flex justify-left">User Details</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className={styles["form-group"]}>
                    <label className={styles["form-label"]} for="fullName">
                      Full Name
                    </label>
                    <input
                      type="string"
                      className="form-control"
                      id="fullName"
                      {...register("fullName")}
                      placeholder="database.fullName"
                    />
                    <p className={styles["form-error-message"]}>
                      {errors.fullName?.message}
                    </p>
                  </div>
                  <div className={styles["form-group"]}>
                    <label className={styles["form-label"]} for="preferredName">
                      Preferred Name
                    </label>
                    <input
                      type="string"
                      className="form-control"
                      id="preferredName"
                      {...register("preferredName")}
                      placeholder="database.preferredName"
                    />
                    <p className={styles["form-error-message"]}>
                      {errors.preferredName?.message}
                    </p>
                  </div>
                  <div className={styles["form-group"]}>
                    <label className={styles["form-label"]} for="email">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      {...register("email")}
                      placeholder="database.email"
                    />
                    <p className={styles["form-error-message"]}>
                      {errors.email?.message}
                    </p>
                  </div>
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit">
                      Update profile
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-4">
              <div className="p-3">
                <h5 className="mb-4 d-flex justify-right">Password</h5>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className={styles["form-group"]}>
                    <label
                      className={styles["form-label"]}
                      for="currentPassword"
                    >
                      Current Password
                    </label>
                    <input
                      type="string"
                      className="form-control"
                      id="currentPassword"
                      // {...userModel("currentPassword")}
                    />
                    <p className={styles["form-error-message"]}>
                      {errors.currentPassword?.message}
                    </p>
                  </div>
                  <div className={styles["form-group"]}>
                    <label className={styles["form-label"]} for="newPassword">
                      New Password
                    </label>
                    <input
                      type="string"
                      className="form-control"
                      id="newPassword"
                      // {...userModel("newPassword")}
                    />
                    <p className={styles["form-error-message"]}>
                      {errors.newPassword?.message}
                    </p>
                  </div>
                  <div className={styles["form-group"]}>
                    <label
                      className={styles["form-label"]}
                      for="confirmNewPassword"
                    >
                      Confirm New Password
                    </label>
                    <input
                      type="string"
                      className="form-control"
                      id="confirmNewPassword"
                      // {...userModel("confirmNewPassword")}
                    />
                    <p className={styles["form-error-message"]}>
                      {errors.confirmNewPassword?.message}
                    </p>
                  </div>
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit">
                      Change Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }


export default Profile
