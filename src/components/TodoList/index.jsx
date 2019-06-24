import React from 'react';
import SearchItem from "../SearchItem"

export default function TodoList(props) {
    return (
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


                            {/* <!-- ProductItem --> */}
                            <p>Lab: Tạo một Component: "Giỏ hàng" nhận vào giá trị bằng React props <i class="fas fa-check"></i></p>
                            <p>Lab: Tạo môt sự kiện cho nút "Thêm vào giỏ hàng" của 1 sản phẩm <i class="fas fa-check"></i></p>
                            <p>Lab: Truyền giá trị đến Component "Giỏ hàng" sau mỗi lần nhấp vào nút "Thêm vào giỏ hàng" <i class="fas fa-check"></i></p>
                            <p>Lab: Tính tổng giá tiền của các sản phẩm trong giỏ hàng</p>
                            <p>Lab: Tạo một nút có chức năng xếp danh sách sản phẩm theo giá từ cao đến thấp <i class="fas fa-check"></i></p>
                            <p>Lab: Tạo một nút có chức năng xếp danh sách sản phẩm theo giá từ thấp đến cao <i class="fas fa-check"></i></p>
                            <p>Lab: Tạo một component "Tìm kiếm sản phẩm" <i class="fas fa-check"></i></p>
                            <p>Lab: Tạo một giao diện đăng ký bằng cách sử dụng Form <i class="fas fa-check"></i></p>
                            <p>Lab: Tạo một giao diện đăng nhập bằng cách sử dụng Form <i class="fas fa-check"></i></p>
                            <p>Lab: Tạo một ứng dụng đồng hồ chạy liên tục <i class="fas fa-check"></i></p>
                            <p>Lab: Tạo một trang chi tiết sản phẩm <i class="fas fa-check"></i></p>

                        </div>
                        {/* <!--SideBar --> */}
                        <div className="col-xl-3 col-lg-4">
                            <div className="sidebar-shop">
                                {/* search the item start */}
                                <SearchItem />
                                {/* search the item end */}
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
                                        <li><a href="_blank" onClick={props.aToZ}>Name: A-Z</a></li>
                                        <li><a href="_blank" onClick={props.zToA}>Name: Z-A</a></li>
                                        <li><a href="_blank" onClick={props.highToLow}>Price: High to Low</a></li>
                                        <li><a href="_blank" onClick={props.lowToHigh}>Price: Low to High</a></li>
                                        <li><a href="_blank" onClick={props.filterSale}>Product: Top Sales > 20%</a></li>
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
    )
}