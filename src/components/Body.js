import React from "react";
import "./Body.css";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

import { UilShoppingCart } from "@iconscout/react-unicons"

function Body() {
  // state for changing the picture
//   const [picture, setPicture] = useState(1);
  const [big, setBig] = useState({ id: 1, url: "/img/img1.jpg" });

  //5 sets of pictures
  // 1 large

  const smallImages = [
    {
      id: 1,
      url: "/img/img2.jpg",
    },

    {
      id: 2,
      url: "/img/img3.jpg",
    },

    {
      id: 3,
      url: "/img/img4.png",
    },

    {
      id: 4,
      url: "/img/img5.png",
    },
  ];

  return (
    <div className="body">

      <div className="images">

      <div className="big-img">
        <img className="large" src={big.url} alt="bigimage" />
      </div>

        <div className="samples">
          {smallImages.map((item) => (
            <>
              <img
                style={{ cursor: "pointer" }}
                src={item.url}
                id={item.id}
                onClick={() => setBig({ ...big, id: item.id, url: item.url })}
              />
            </>
          ))}
        </div>
      </div>

      <div className="description">
        <h4>SNEAKER COMPANY</h4>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <h3>
          $125.00 <span>50%</span>
        </h3>
        <p className="cash">$250.00</p>

        <div className="container">
          <div className="counter">
            <input
              type="button"
              onclick="decrementValue()"
              value="-"
              className="counter-sign"
            />
            <input
              type="text"
              name="quantity"
              value="0"
              className="counter-text"
            />
            <input
              type="button"
              onclick="incrementValue()"
              value="+"
              className="counter-sign"
            />
          </div>
          <button> 
              <UilShoppingCart className="cartIcon" /> Add to cart
            </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
