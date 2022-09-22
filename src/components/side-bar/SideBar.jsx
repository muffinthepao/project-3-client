import { Link } from "react-router-dom"

function SideBar() {

  const userData = JSON.parse(localStorage.getItem("user_data")) 

  return (
    <>
      <div className="col-2">
        <div class="d-flex gap-3 flex-column mt-4">

            <Link to={`/users/profile/${userData?.userId}`} class="btn btn-primary btn-lg px-4">
              Account
            </Link>

            <Link to={`/users/savedListings/${userData?.userId}`} class="btn btn-primary btn-lg px-4">
                Saved Listings
            </Link>

            <Link to={`/users/orderHistory/${userData?.userId}`} class="btn btn-primary btn-lg px-4">
                Order History
            </Link>

        </div>
      </div>
    </>
  )
}

export default SideBar
