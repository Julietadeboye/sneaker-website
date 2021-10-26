import React from 'react'
import './Body.css'

function Body() {
    return (
        <div className="body">
           <div className="images">
               <div className="big-img">
                    <img src="/img/img1.jpg" alt="sneakers" /> 
               </div>
               <div className="samples">
                    <img src="/img/img2.jpg" alt="sneakers" /> 
                    <img src="/img/img3.jpg" alt="sneakers" /> 
                    <img src="/img/img4.png" alt="sneakers" /> 
                    <img src="/img/img5.png" alt="sneakers" /> 
               </div>
            </div> 

            <div className="description">
                <h4>SNEAKER COMPANY</h4>
                <h1>Fall Limited Edition Sneakers</h1>
                <p>
                    These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                </p>
                <h3>$125.00 <span>50%</span></h3>
                <p className="cash">$250.00</p>

                 <div className="container">
                     <div className="counter">
                            <input type="button" onclick="decrementValue()" value="-" className="counter-sign" />
                            <input type="text" name="quantity" value="0" className="counter-text" />
                            <input type="button" onclick="incrementValue()" value="+" className="counter-sign"/>
                     </div>
                     <button>Add to cart</button>
                 </div>

                 
            </div>
        </div>
    )
}

export default Body
