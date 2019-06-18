import React from "react";

export default function Headers() {
  return (
    <>
      <div id="header-sticky" class="header-area box-90 sticky-header">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-xl-2 col-lg-6 col-md-6 col-7 col-sm-5 d-flex align-items-center pos-relative">
              <div class="logo">
                <a href="#"><img src="./assets/logo_shop.png" alt="" /></a>
              </div>

              <div class="category-menu">
                <h4>Category</h4>
                <ul>
                  <li><a href="#"><i class="fas fa-shopping-cart"></i> Table lamp</a></li>
                  <li><a href="#"><i class="fas fa-shopping-cart"></i> Furniture</a></li>
                  <li><a href="#"><i class="fas fa-shopping-cart"></i> Chair</a></li>
                  <li><a href="#"><i class="fas fa-shopping-cart"></i> Men</a></li>
                  <li><a href="#"><i class="fas fa-shopping-cart"></i> Women</a></li>
                  <li><a href="#"><i class="fas fa-shopping-cart"></i> Cloth</a></li>
                  <li><a href="#"><i class="fas fa-shopping-cart"></i> Trend</a></li>
                </ul>
              </div>
            </div>
            <div class="col-xl-8 col-lg-6 col-md-8 col-8 d-none d-xl-block">
              <div class="main-menu text-center">
                <nav id="mobile-menu" style="display: block;">
                  <ul>
                    <li>
                      <a href="./index.html">Home</a>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul class="submenu">
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
            <div class="col-xl-2 col-lg-6 col-md-6 col-5 col-sm-7 pl-0">
              <div class="header-right f-right">
                <ul>
                  <li class="search-btn">
                    <a class="search-btn nav-search search-trigger" href="#"><i class="fas fa-search"></i></a>
                  </li>
                  <li class="login-btn"><a href="#"><i class="far fa-user"></i></a></li>
                  <li class="d-shop-cart"><a href="#"><i class="fas fa-shopping-cart"></i> <span class="cart-count">3</span></a>
                    <ul class="minicart">
                      <li>
                        <div class="cart-img">
                          <a href="#">
                            <img src="./assets/pro1.jpg" alt="" />
                          </a>
                        </div>
                        <div class="cart-content">
                          <h3>
                            <a href="#">Black &amp; White Shoes</a>
                          </h3>
                          <div class="cart-price">
                            <span class="new">$ 229.9</span>
                            <span>
                              <del>$239.9</del>
                            </span>
                          </div>
                        </div>
                        <div class="del-icon">
                          <a href="#">
                            <i class="far fa-trash-alt"></i>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div class="cart-img">
                          <a href="#">
                            <img src="./assets/pro2.jpg" alt="" />
                          </a>
                        </div>
                        <div class="cart-content">
                          <h3>
                            <a href="#">Black &amp; White Shoes</a>
                          </h3>
                          <div class="cart-price">
                            <span class="new">$ 229.9</span>
                            <span>
                              <del>$239.9</del>
                            </span>
                          </div>
                        </div>
                        <div class="del-icon">
                          <a href="#">
                            <i class="far fa-trash-alt"></i>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div class="cart-img">
                          <a href="#">
                            <img src="./assets/pro3.jpg" alt="" />
                          </a>
                        </div>
                        <div class="cart-content">
                          <h3>
                            <a href="#">Black &amp; White Shoes</a>
                          </h3>
                          <div class="cart-price">
                            <span class="new">$ 229.9</span>
                            <span>
                              <del>$239.9</del>
                            </span>
                          </div>
                        </div>
                        <div class="del-icon">
                          <a href="#">
                            <i class="far fa-trash-alt"></i>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div class="total-price">
                          <span class="f-left">Total:</span>
                          <span class="f-right">$300.0</span>
                        </div>
                      </li>
                      <li>
                        <div class="checkout-link">
                          <a href="#">Shopping Cart</a>
                          <a class="red-color" href="#">Checkout</a>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-12 d-xl-none">
              <div class="mobile-menu"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}