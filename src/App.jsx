import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from "./components/ProductList";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import ItemDetail from "./components/ItemDetail";
import Layout from "./components/Layout";
import result from "./data.json"



function App() {

  const [name, setName] = useState("");
  const [img_url, setImg_url] = useState("");
  const [price, setPrice] = useState("");
  const [final_price, setfinal_price] = useState("");
  const [itemInCart, setItemInCart] = useState([])
  const [dataGlobal, setdataGlobal] = useState(result)
  const onClickBtn = (name, img_url, price, final_price) => {
    setName(name)
    setImg_url(img_url)
    setPrice(price)
    setfinal_price(final_price)
    setItemInCart(itemInCart + [{ name, price }])
  };
  console.log(itemInCart)

  const lowToHigh = (e) => {
    e.preventDefault();
    const sortedList = dataGlobal.data.sort((a,b)=> a.final_price - b.final_price);

    console.log(sortedList)
  };
  const highToLow = (e) => {
    e.preventDefault();
    const sortedList = dataGlobal.data.sort((a,b)=> b.final_price - a.final_price);
    
    setdataGlobal(sortedList)
    console.log(sortedList)
  };
  const aToZ = (e) => {
    e.preventDefault();
    // const sortedList = sortData(true, "name", dataGlobal);
    // return <ProductList {...sortedList} clickFromItem={onClickBtn} />;
  };
  const zToA = (e) => {
    e.preventDefault();
    // const sortedList = sortData(false, "name", dataGlobal);
    // return <ProductList {...sortedList} clickFromItem={onClickBtn} />;
  };
  const filterSale = () => {
    // const sortedList = filterBigSale(dataGlobal, 50);
    // addProduct(sortedList);
  };



  return (
    <Layout name={name} img_url={img_url} price={price}
      final_price={final_price}>
      {/* <!-- header start --> */}

      {/* <!-- header end --> */}

      {/* <!-- ProductList start --> */}
      <ProductList {...dataGlobal} clickFromItem={onClickBtn}
        aToZ={aToZ} highToLow={highToLow} lowToHigh={lowToHigh} />
      {/* <ItemDetail /> */}
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
