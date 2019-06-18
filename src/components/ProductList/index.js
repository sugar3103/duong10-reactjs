import React from "react";
import ProductItem from "../ProductItem"
import result from "../../data.json"

export default function ProductList() {
    return (
        <main>
            <section class="shop-area pt-150 pb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-9 col-lg-8">
                            {/* <!-- tab filter --> */}
                            <div class="row mb-10">
                                <div class="col-xl-5 col-lg-6 col-md-6">
                                    <div class="product-showing mb-40">
                                        <p>Showing 1–22 of 32 results</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- tab content --> */}
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div class="row">
                                        
                                        {/* <!-- ProductItem --> */}
                                        {result.data.map(ele => 
                                            <ProductItem name={ele.name} price={ele.price}
                                            final_price={ele.final_price} shop_id={ele.shop_id} 
                                             />
                                            )}
                                          
                                                    
                                                    
                                            
                                            
                            
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--SideBar --> */}
                        <div class="col-xl-3 col-lg-4">
                            <div class="sidebar-shop">
                                <div class="shop-widget">
                                    <h3 class="shop-title">Search by</h3>
                                    <form action="#" class="shop-search">
                                        <input type="text" placeholder="Your keyword...." />
                                        <button><i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                                {/* <!--
                            <div class="shop-widget">
                                                                                                        <h3 class="shop-title">Filter selection</h3>
                                                                                                        <div class="price-filter">
                                                                                                          <div id="slider-range" class="ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"><div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 15%; width: 45%;"></div><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 15%;"></span><span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 60%;"></span></div>
                                                                                                          <input type="text" id="amount">
                                </div>
                                                                                                        </div> --> */}

                                <div class="shop-widget">
                                    <h3 class="shop-title">SHOP BY</h3>
                                    <ul class="shop-link">
                                        <li><a href="_blank">Name: A-Z</a></li>
                                        <li><a href="_blank">Name: Z-A</a></li>
                                        <li><a href="_blank">Price: High to Low</a></li>
                                        <li><a href="_blank">Price: Low to High</a></li>
                                        <li><a href="_blank">Product: Top Sales</a></li>
                                    </ul>
                                </div>

                                <div class="shop-widget">
                                    <h3 class="shop-title">Recent Product</h3>
                                    <ul class="shop-sidebar-product">
                                        <li>
                                            <div class="side-pro-img">
                                                <a href="_blank"><img src="./assets/shop-rsp3.jpg" alt="" /></a>
                                            </div>
                                            <div class="side-pro-content">
                                                <div class="side-pro-rating">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                                <h5><a href="_blank">Raglan Baseball-Style</a></h5>
                                                <div class="side-pro-price">
                                                    <span>$119.00 USD</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="side-pro-img">
                                                <a href="_blank"><img src="./assets/shop-rsp2.jpg" alt="" /></a>
                                            </div>
                                            <div class="side-pro-content">
                                                <div class="side-pro-rating">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                                <h5><a href="_blank">Raglan Baseball-Style</a></h5>
                                                <div class="side-pro-price">
                                                    <span>$119.00 USD</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="side-pro-img">
                                                <a href="_blank"><img src="./assets/shop-rsp4.jpg" alt="" /></a>
                                            </div>
                                            <div class="side-pro-content">
                                                <div class="side-pro-rating">
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                    <i class="fas fa-star"></i>
                                                </div>
                                                <h5><a href="_blank">Raglan Baseball-Style</a></h5>
                                                <div class="side-pro-price">
                                                    <span>$119.00 USD</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div class="shop-widget">
                                    <div class="shop-sidebar-banner">
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
    )
}