import React, { useState } from "react";
import ProductItem from "../ProductItem";
import result from "../../data.json";
import Headers from "../Headers";
import CartItem from "../CartItem"

export default function ProductList() {
    const [text, setText] = useState("Cart here");
    const [URL, setURL] = useState("URL here");
    const [thePrice, setThePrice] = useState("Price here");
    const [theFinalPrice, setTheFinalPrice] = useState("Final Price here");
    const sendText = (text, theURL, thePrice, theFinalPrice) => {
        setText(text);
        setURL(theURL);
        setThePrice(thePrice);
        setTheFinalPrice(theFinalPrice);
    };

    return (
        <>
            <header>
                <div id="header-sticky" className="header-area box-90 sticky-header">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-6 col-md-6 col-7 col-sm-5 d-flex align-items-center pos-relative">
                                <div className="logo">
                                    <a href="_blank"><img src="./assets/logo_shop.png" alt="" /></a>
                                </div>

                                <div className="category-menu">
                                    <h4>Category</h4>
                                    <ul>
                                        <li><a href="_blank"><i className="fas fa-shopping-cart"></i> Table lamp</a></li>
                                        <li><a href="_blank"><i className="fas fa-shopping-cart"></i> Furniture</a></li>
                                        <li><a href="_blank"><i className="fas fa-shopping-cart"></i> Chair</a></li>
                                        <li><a href="_blank"><i className="fas fa-shopping-cart"></i> Men</a></li>
                                        <li><a href="_blank"><i className="fas fa-shopping-cart"></i> Women</a></li>
                                        <li><a href="_blank"><i className="fas fa-shopping-cart"></i> Cloth</a></li>
                                        <li><a href="_blank"><i className="fas fa-shopping-cart"></i> Trend</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-6 col-md-8 col-8 d-none d-xl-block">
                                <div className="main-menu text-center">
                                    <nav id="mobile-menu" style={{ display: "block" }}>
                                        <ul>
                                            <li>
                                                <a href="./index.html">Home</a>
                                            </li>
                                            <li>
                                                <a href="_blank">Pages</a>
                                                <ul className="submenu">
                                                    <li>
                                                        <a href="./detail.html">Product Detail</a>
                                                    </li>
                                                    <li>
                                                        <a href="./login.html">login</a>
                                                    </li>
                                                    <li>
                                                        <a href="./register.html">Register</a>
                                                    </li>
                                                    <li>
                                                        <a href="./cart.html">Shoping Cart</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6 col-5 col-sm-7 pl-0">
                                <div className="header-right f-right">
                                    <ul>
                                        <li className="search-btn">
                                            <a className="search-btn nav-search search-trigger" href="_blank"><i className="fas fa-search"></i></a>
                                        </li>
                                        <li className="login-btn"><a href="_blank"><i className="far fa-user"></i></a></li>
                                        <li className="d-shop-cart"><a href="_blank"><i className="fas fa-shopping-cart"></i> <span className="cart-count">"CartCount"</span></a>
                                            <ul className="minicart" id="minicart">
                                                {/* CartItem start */}
                                                <CartItem text={text} theURL={URL} thePrice={thePrice} theFinalPrice={theFinalPrice}/>
                                                {/* CartItem End */}
                                                <li>
                                                    <div className="checkout-link">
                                                        <a href="./cart.html">Shopping Cart</a>
                                                        <a className="red-color" href="_blank">Checkout</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-12 d-xl-none">
                                <div className="mobile-menu"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <section className="shop-area pt-150 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 col-lg-8">
                                {/* <!-- tab filter --> */}

                                <div className="row mb-10">
                                    <div className="col-xl-5 col-lg-6 col-md-6">
                                        <div className="product-showing mb-40">
                                            <p>Showing 1–22 of 32 results</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- tab content --> */}
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="row">

                                            {/* <!-- ProductItem --> */}
                                            {result.data.map(ele =>
                                                <ProductItem name={ele.name} price={ele.price} shop_id={ele.shop_id}
                                                    final_price={ele.final_price} img_url={ele.img_url} sendText={sendText}
                                                />
                                            )}

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--SideBar --> */}
                            <div className="col-xl-3 col-lg-4">
                                <div className="sidebar-shop">
                                    <div className="shop-widget">
                                        <h3 className="shop-title">Search by</h3>
                                        <form action="#" className="shop-search">
                                            <input type="text" placeholder="Your keyword...." />
                                            <button><i className="fa fa-search"></i></button>
                                        </form>
                                    </div>
                                    {/* <!--
                            <div className="shop-widget">
                                                                                                        <h3 className="shop-title">Filter selection</h3>
                                                                                                        <div className="price-filter">
                                                                                                          <div id="slider-range" className="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div className="ui-slider-range ui-corner-all ui-widget-header" style="left: 15%; width: 45%;"></div><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style="left: 15%;"></span><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style="left: 60%;"></span></div>
                                                                                                          <input type="text" id="amount">
                                </div>
                                                                                                        </div> --> */}

                                    <div className="shop-widget">
                                        <h3 className="shop-title">SHOP BY</h3>
                                        <ul className="shop-link">
                                            <li><a href="_blank">Name: A-Z</a></li>
                                            <li><a href="_blank">Name: Z-A</a></li>
                                            <li><a href="_blank">Price: High to Low</a></li>
                                            <li><a href="_blank">Price: Low to High</a></li>
                                            <li><a href="_blank">Product: Top Sales</a></li>
                                        </ul>
                                    </div>

                                    <div className="shop-widget">
                                        <h3 className="shop-title">Recent Product</h3>
                                        <ul className="shop-sidebar-product">
                                            <li>
                                                <div className="side-pro-img">
                                                    <a href="_blank"><img src="./assets/shop-rsp3.jpg" alt="" /></a>
                                                </div>
                                                <div className="side-pro-content">
                                                    <div className="side-pro-rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                    <h5><a href="_blank">Raglan Baseball-Style</a></h5>
                                                    <div className="side-pro-price">
                                                        <span>$119.00 USD</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="side-pro-img">
                                                    <a href="_blank"><img src="./assets/shop-rsp2.jpg" alt="" /></a>
                                                </div>
                                                <div className="side-pro-content">
                                                    <div className="side-pro-rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                    <h5><a href="_blank">Raglan Baseball-Style</a></h5>
                                                    <div className="side-pro-price">
                                                        <span>$119.00 USD</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="side-pro-img">
                                                    <a href="_blank"><img src="./assets/shop-rsp4.jpg" alt="" /></a>
                                                </div>
                                                <div className="side-pro-content">
                                                    <div className="side-pro-rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                    <h5><a href="_blank">Raglan Baseball-Style</a></h5>
                                                    <div className="side-pro-price">
                                                        <span>$119.00 USD</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="shop-widget">
                                        <div className="shop-sidebar-banner">
                                            <a href="_blank"><img src="./assets/shop-banner.jpg" alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- /SideBar --> */}
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}