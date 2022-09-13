import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();

    localStorage.removeItem("user_token");

    navigate("/beverages");
    
    toast.success("Logout Successful!");
}

export default Logout;
