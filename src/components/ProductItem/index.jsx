import React from "react";

export default function ProductItem(props, clickFromItem) {
    const sendTextToParent = (e) =>{
        e.preventDefault();
        clickFromItem(props.name)
    }
    return (
        <>
         {/* <!-- ProductItem --> */ }
        <div key={props.product_id} className="col-xl-4 col-lg-6 col-md-6" >
            <div  className="product-wrapper mb-50">
                <div className="product-img mb-25">
                    <a href="_blank">
                        <img src={props.img_url} alt="" />
                        <img className="secondary-img" src="./assets/pro2.jpg" alt="" />
                    </a>
                    <div className="product-action text-center">
                        <a href="_blank" title="Shoppingb Cart" onClick={sendTextToParent}>
                            <i className="fas fa-shopping-cart"></i>
                        </a>
                        <a href="_blank" title="Quick View">
                            <i className="fas fa-search"></i>
                        </a>

                    </div>
                </div>
                
                <div className="product-content pr-0">
                    <div className="pro-cat mb-10">
                        <a href="_blank">{props.shop_id}</a>
                    </div>
                    <h4>
                        <a href="_blank">{props.name}</a>
                    </h4>
                    <div className="product-meta">
                        <div className="pro-price">
                            <span>{props.final_price}</span>
                            <span className="old-price">{props.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
        </>
        // {/* <!-- /ProductItem --> */ }
    )
}
