import React from "react";

export default function CartItem(props) {
    return (
        <>  
            <li>
                <div style={{}} className="cart-img">
                    <a href="_blank">
                        <img src={props.img_url} alt="" />
                        
                    </a>
                </div>

                <div className="cart-content">
                    <h3>
                        
                        <a href="_blank">{props.name}</a>
                    </h3>
                    <div className="cart-price">
                        <span className="new">{props.final_price}</span>
                        <span>
                            <del>{props.price}</del>
                        </span>
                    </div>
                </div>
                <div className="del-icon">
                    <a href="_blank">
                        <i className="far fa-trash-alt"></i>
                    </a>
                </div>
            </li>

            

        </>
    )
}