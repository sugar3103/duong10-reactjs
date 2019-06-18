import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import ProductList from "./components/ProductList"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <body>
        {/* <!-- header start --> */}
        <Header />
        {/* <!-- header end --> */}

        {/* <!-- shop-area start --> */}
        <ProductList />
        {/* <!-- shop-area end --> */}

        {/* <!-- footer start --> */}
        <Footer />
        {/* <!-- footer end --> */}

        {/* <!-- Fullscreen search --> */}
        <div class="search-wrap">
          <div class="search-inner">
            <i class="fas fa-times search-close" id="search-close"></i>
            <div class="search-cell">
              <form method="get">
                <div class="search-field-holder">
                  <input type="search" class="main-search-input" placeholder="Search Entire Store..." />
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <!-- end fullscreen search --> */}
      </body>
    </>
  );
}

export default App;
