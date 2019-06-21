import React, { useState } from "react";

export default function CartItem({text, theURL, thePrice, theFinalPrice}) {
    
        
    return (
        <>  
            <li>
                <div className="cart-img">
                    <a href="_blank">
                        <img src={theURL} alt="" />
                    </a>
                </div>

                <div className="cart-content">
                    <h3>
                        <a href="_blank">{text}</a>
                    </h3>
                    <div className="cart-price">
                        <span className="new">{theFinalPrice}</span>
                        <span>
                            <del>{thePrice}</del>
                        </span>
                    </div>
                </div>
                <div className="del-icon">
                    <a href="_blank">
                        <i className="far fa-trash-alt"></i>
                    </a>
                </div>
            </li>

            <li>
                <div className="total-price">
                    <span className="f-left">Total:</span>
                    <span className="f-right">$300.0</span>
                </div>
            </li>

        </>
    )
}