import React from "react";
import "./Navbar.css";

import { UilShoppingCart } from "@iconscout/react-unicons";

function Navbar(props) {
    console.log(props.cartNumber);
    //props is an object


    
  return (
    <div>
      <nav>
        <ul className="navlinks">
          <li>
            <a href=" ">Collection</a>
          </li>
          <li>
            <a href=" ">Men</a>
          </li>
          <li>
            <a href=" ">Women</a>
          </li>
          <li>
            <a href=" ">About</a>
          </li>
          <li>
            <a href=" ">Contact</a>
          </li>
        </ul>

        <div className="icons">
          <div className="cart">
            <UilShoppingCart alt="a shopping cart"  />
            <div className="cart_item_number">{props.cartNumber}</div>
          </div>
          <img
            src="/img/profile-avi.png"
            alt="profile avi"
            className="profile"
          />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
