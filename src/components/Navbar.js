import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div >
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
                <img src="/img/cart-icon.png" alt="a shopping cart" className="cart" />
                <img src="/img/profile-avi.png" alt="profile avi" className="profile"/>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
