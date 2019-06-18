import React from "react";


export default function ProductItem({name, price, shop_id, final_price, img_url}) {
    return (
        // {/* <!-- ProductItem --> */ }
        < div className="col-xl-4 col-lg-6 col-md-6" >
            <div className="product-wrapper mb-50">
                <div className="product-img mb-25">
                    <a href="_blank">
                        <img src={img_url} alt="" />
                        <img className="secondary-img" src="./assets/pro2.jpg" alt="" />
                    </a>
                    <div className="product-action text-center">
                        <a href="_blank" title="Shoppingb Cart">
                            <i className="fas fa-shopping-cart"></i>
                        </a>
                        <a href="_blank" title="Quick View">
                            <i className="fas fa-search"></i>
                        </a>

                    </div>
                </div>
                <div className="product-content pr-0">
                    <div className="pro-cat mb-10">
                        <a href="_blank">{shop_id}</a>
                    </div>
                    <h4>
                        <a href="_blank">{name}</a>
                    </h4>
                    <div className="product-meta">
                        <div className="pro-price">
                            <span>{final_price}</span>
                            <span className="old-price">{price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
        // {/* <!-- /ProductItem --> */ }
    )
}