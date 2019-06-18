import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import ProductList from "./components/ProductList"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      {/* <!-- header start --> */}
      
      {/* <!-- header end --> */}

      {/* <!-- ProductList start --> */}
      
      {/* <!-- ProductList End --> */}

      {/* <!-- footer start --> */}
      
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
