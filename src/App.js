import React from 'react';
import logo from './logo.svg';
import './App.css';
import Headers from "./components/Headers"
import ProductList from "./components/ProductList"
import Footers from "./components/Footers"

function App() {
  return (
    <>
      {/* <!-- header start --> */}
      <Headers />
      {/* <!-- header end --> */}

      {/* <!-- ProductList start --> */}
      <ProductList />
      {/* <!-- ProductList End --> */}

      {/* <!-- footer start --> */}
      <Footers />
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

    </>
  );
}

export default App;
