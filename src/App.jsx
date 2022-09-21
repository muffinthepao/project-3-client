import axios from "axios";
import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";

import Beverages from "./pages/beverages/Beverages";
import BeverageDetails from "./pages/beverage/BeverageDetails";
import Cart from "./pages/cart/Cart";
import Header from "./components/partials/header";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-toastify/dist/ReactToastify.css";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {

    const {userId} = JSON.parse(localStorage.getItem("user_data"))

    const [isFetchingCart, setFetchingCart] = useState(true)
    const [userCart, setUserCart] = useState({})
    const [cartTotalPrice, setCartTotalPrice] = useState(0.00)
    const [totalItemsInCart, setTotalItemsTotal] = useState(0)

    useEffect(() => {
        //if(userId) {run getCart()} <----- look here

        //cart with items
        const userBaseURL = `http://localhost:8000/api/v1/users/${userId}/cart`;

        //env
        // BASE_URL=<from backend deployment>+ /api/v1
        
        // //empty cart
        // const userBaseURL = `http://localhost:8000/api/v1/users/6320744d7143eaf92da07de2/cart`;
        const getCart = async () => {
    
            try {
                const response = await axios.get(userBaseURL)
                setUserCart(response.data)
                console.log("response.data: ", response.data)


                const cartSum = response.data.lineItems.reduce((previousValue, currentValue) => previousValue + (currentValue.quantity * currentValue.product.price), 0)
                setCartTotalPrice(cartSum)

                const totalItemsInCart = response.data.lineItems.reduce((previousValue, currentValue) => previousValue + (currentValue.quantity), 0)
                setTotalItemsTotal(totalItemsInCart)
                setFetchingCart(false)
    
            } catch (error) {
                console.log(error)
                return
            }
        }

       getCart().catch(console.error);

    },[]);
    
    console.log(userCart)
    return (
        <div className="App">
            <ShoppingCartProvider>
                <Header totalItemsInCart={totalItemsInCart}/>

                <Routes>
                    <Route path="/" />
                    <Route path="/beverages" element={<Beverages setUserCart={setUserCart} setTotalItemsTotal={setTotalItemsTotal}/>} />
                    <Route path="/beverages/:beverageId"element={<BeverageDetails setUserCart={setUserCart} setTotalItemsTotal={setTotalItemsTotal}/>} />
                    <Route path="/users/auth/login" element={<Login />} />
                    <Route path="/users/auth/register" element={<Register />} />
                    <Route path="/users/profile/:userId" element={<Profile />} />
                    <Route path="/users/:userId/cart" element={<Cart isFetchingCart={isFetchingCart} userCart={userCart} cartTotalPrice={cartTotalPrice} totalItemsInCart={totalItemsInCart} setUserCart={setUserCart} setTotalItemsTotal={setTotalItemsTotal}/>} />
                </Routes>

                <ToastContainer />
            </ShoppingCartProvider>
        </div>
    );
}

export default App;
