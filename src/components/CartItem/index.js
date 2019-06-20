import React, { useState } from "react";
import ProductItem from "../ProductItem";

export default function CartItem() {
    const [text, setText] = useState("");
    const sendText = value => {
        console.log(value);
        setText(value)

    }

    return (
        <>
            <ProductItem sendText={sendText} />
            <li>
                <div className="cart-img">
                    <a href="_blank">
                        <img src="./assets/pro1.jpg" alt="" />
                    </a>
                </div>
                <div className="cart-content">
                    <h3>
                        <a href="_blank">Black &amp; {text}</a>
                    </h3>
                    <div className="cart-price">
                        <span className="new">final_price</span>
                        <span>
                            <del>price</del>
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