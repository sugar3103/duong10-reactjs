import React from "react";

export default function CartItem({name}) {
    
    return (
        <>  
            <li>
                <div className="cart-img">
                    <a href="_blank">
                        <img src="{props.img_url}" alt="" />
                    </a>
                </div>

                <div className="cart-content">
                    <h3>
                        <a href="_blank">{name}</a>
                    </h3>
                    <div className="cart-price">
                        <span className="new">"props.final_price"</span>
                        <span>
                            <del>"props.price"</del>
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