import React from "react";

export default function CartItem(props) {
    const onRemoveProduct = (props) => {
        const itemCartDontHaveProps = props.itemInCart.filter(product => product.product_id !== props.product_id)
    };
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
                    <strong className="text-right">X {props.so_luong}</strong>
                    <div className="cart-price">
                        <span className="new">{props.final_price.toLocaleString()}</span>
                        <span> </span>
                        <span>
                            <del>{props.price.toLocaleString()}</del>
                        </span>
<<<<<<< HEAD
                        <span>  </span>

=======
                        <span> X </span> <span><strong>{props.so_luong}</strong></span>
>>>>>>> e4a86b051d2a7399fe0a2653602a8b935595c7e7
                    </div>
                </div>

                <div className="del-icon">
                    <a href="_blank" onclick={onRemoveProduct}>
                        <i className="far fa-trash-alt"></i>
                    </a>
                </div>
            </li>



        </>
    )
}