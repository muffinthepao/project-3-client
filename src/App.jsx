import axios from "axios";
import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";

import Beverages from './pages/beverages/Beverages';
import BeverageDetails from './pages/beverage/BeverageDetails';
import Cart from './pages/cart/Cart';
import Header from './components/partials/header';
import Login from './pages/login/Login';
import NotFound from "./pages/not-found/NotFound";
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
// import SavedListings from './pages/profile/SavedListings';
// import OrderHistory from './pages/profile/OrderHistory';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'react-toastify/dist/ReactToastify.css';

function App() {

    const userLoggedIn = localStorage.getItem("user_token")
   
    const [userData, setUserData] = useState({})

    const [isFetchingCart, setFetchingCart] = useState(true)
    const [userCart, setUserCart] = useState({})
    const [cartTotalPrice, setCartTotalPrice] = useState(0.00)
    const [totalItemsInCart, setTotalItemsTotal] = useState(0)

    useEffect(() => {
        if (userLoggedIn) {
            
            let userId = userData.userId

    
            //cart with items
            const userBaseURL = `${process.env.USER_BASE_URL}/${userId}/cart`;
            
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
        }

    },[userLoggedIn]);
    
    console.log(userCart)
    return (
        <div className="App">
            
                <Header setTotalItemsTotal={setTotalItemsTotal} totalItemsInCart={totalItemsInCart} userData={userData} setUserData={setUserData}/>

                <Routes>
                    <Route path="/" />
                    <Route path="/beverages" element={<Beverages setUserCart={setUserCart} setTotalItemsTotal={setTotalItemsTotal}/>} />
                    <Route path="/beverages/:beverageId"element={<BeverageDetails userData={userData} setUserCart={setUserCart} setTotalItemsTotal={setTotalItemsTotal}/>} />
                    <Route path="/users/auth/login" element={<Login setUserData={setUserData}/>} />
                    <Route path="/users/auth/register" element={<Register />} />
                    <Route path="/users/profile/:userId" element={<Profile setUserData={setUserData} />} />
                    <Route path="/users/:userId/cart" element={<Cart isFetchingCart={isFetchingCart} userCart={userCart} cartTotalPrice={cartTotalPrice} totalItemsInCart={totalItemsInCart} setUserCart={setUserCart} setTotalItemsTotal={setTotalItemsTotal} setCartTotalPrice={setCartTotalPrice}/>} />
                    <Route path= "*" element={<NotFound />}/>
                    {/* <Route path="/users/savedListings/:userId" element={<SavedListings />} />
                    <Route path="/users/orderHistory/:userId" element={<OrderHistory />} /> */}
                </Routes>

                <ToastContainer />
           
        </div>
    );
}

export default App;
