import React from "react";


export default function ProductItem({name, price, shop_id, final_price, img_url}) {
    return (
        // {/* <!-- ProductItem --> */ }
        < div class="col-xl-4 col-lg-6 col-md-6" >
            <div class="product-wrapper mb-50">
                <div class="product-img mb-25">
                    <a href="_blank">
                        <img src={img_url} alt="" />
                        <img class="secondary-img" src="./assets/pro2.jpg" alt="" />
                    </a>
                    <div class="product-action text-center">
                        <a href="_blank" title="Shoppingb Cart">
                            <i class="fas fa-shopping-cart"></i>
                        </a>
                        <a href="_blank" title="Quick View">
                            <i class="fas fa-search"></i>
                        </a>

                    </div>
                </div>
                <div class="product-content pr-0">
                    <div class="pro-cat mb-10">
                        <a href="_blank">{shop_id}</a>
                    </div>
                    <h4>
                        <a href="_blank">{name}</a>
                    </h4>
                    <div class="product-meta">
                        <div class="pro-price">
                            <span>{final_price}</span>
                            <span class="old-price">{price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
        // {/* <!-- /ProductItem --> */ }
    )
}