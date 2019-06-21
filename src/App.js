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
      
      {/* <!-- header end --> */}

      {/* <!-- ProductList start --> */}
      <div id="productlist"></div>
      
      {/* <!-- ProductList End --> */}

      {/* <!-- footer start --> */}
      <Footers />
      {/* <!-- footer end --> */}

      {/* <!-- Fullscreen search --> */}
      <div className="search-wrap">
        <div className="search-inner">
          <i className="fas fa-times search-close" id="search-close"></i>
          <div className="search-cell">
            <form method="get">
              <div className="search-field-holder">
                <input type="search" className="main-search-input" placeholder="Search Entire Store..." />
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
