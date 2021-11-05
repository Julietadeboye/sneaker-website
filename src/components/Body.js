import React from "react";
import "./Body.css";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

import { UilShoppingCart } from "@iconscout/react-unicons";

function Body() {
  // state for changing the picture
  //   const [picture, setPicture] = useState(1);
  const [big, setBig] = useState({ id: 1, url: "/img/img1.jpg" });

  //5 sets of pictures
  // 1 large

  const product = { big };

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

  const [count, setCount] = useState(0);

  

  const minusCount = () => {
    setCount(count - 1);
  };

  const plusCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
      // If count is less than 0, setCount to 0
      // while checking for count
      if (count < 0){
        setCount(0)
      }
    }, [count])

  const [cartItems, setCartItems] = useState([]);



// Add the number of items in the cart to the cart icon
console.log(cartItems.length);

  const addToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

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
            <button className="counter-sign" onClick={minusCount}>
              -
            </button>
            <span className="counter-text">{count}</span>
            <button className="counter-sign" onClick={plusCount}>
              +
            </button>
          </div>
          <button className='cart_button' onClick={addToCart}>
            <UilShoppingCart className="cartIcon" /> 
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Body;
