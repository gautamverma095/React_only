
import React from "react";

import ReactDOM from "react-dom/client"


const data = []

const RestaurantCard = (props) => {
    return (
        <div className="res_card">
            <img className="img_item" src= {props.foodImg} />
            <h3 >{ props.res_name}</h3>
            <h4>{ props.cuisine}</h4>
        <h4>4.3 stars</h4>
        <h4>43 minutes</h4>
        </div>
    )
}

const Header = () => {
    return (
        <div className="header" >
        
            <div className="logo-container">
                <img className = "logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="" />
            </div>
            <div className="nav_items">
                
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            
            </div>
        </div>

    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search_container">Search</div>
            <div className="res_container">
            <RestaurantCard  res_name = "Meghna food" cuisine = "Biryani,North Indian" foodImg = "https://thumbs.dreamstime.com/b/heart-shape-various-vegetables-fruits-healthy-food-concept-isolated-white-background-140287808.jpg" />
            <RestaurantCard  res_name = "KFC" cuisine = "Burger" foodImg = "https://img.freepik.com/free-photo/burger-hamburger-cheeseburger_505751-3690.jpg"/>
           
            </div>
        
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)