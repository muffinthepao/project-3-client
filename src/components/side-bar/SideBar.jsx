import { NavLink, useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode'


function SideBar() {

    const navigate = useNavigate()

    //get user token to show "Profile" rather than "Login/Register"
    const token = localStorage.getItem("user_token")
    const userData = JSON.parse(localStorage.getItem("user_data")) 

    const user = token? (jwt_decode(token)) : null



return (
    <>
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
      </>
)
}


export default SideBar