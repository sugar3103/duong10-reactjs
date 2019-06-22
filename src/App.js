import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from "./components/ProductList";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import Layout from "./components/Layout";

function App() {

  return (
    <Layout>
      {/* <!-- header start --> */}

      {/* <!-- header end --> */}

      {/* <!-- ProductList start --> */}
      <LoginForm />

      {/* <!-- ProductList End --> */}

      {/* <!-- footer start --> */}
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

    </Layout>
  );
}

export default App;
