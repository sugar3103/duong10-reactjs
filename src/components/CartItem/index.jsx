import React from "react";
import './styles.scss';

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
                    <div style={{ width: 150 }}>
                        <h3>
                            <a href="_blank">{props.name}</a>
                        </h3>
                    </div>

                    <div className="cart-price">
                        <span className="new">{props.final_price.toLocaleString()}</span>
                        <span> </span>
                        <span>
                            <del>{props.price.toLocaleString()}</del>
                        </span>
                        <span> X </span> <span><strong>{props.so_luong}</strong></span>
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