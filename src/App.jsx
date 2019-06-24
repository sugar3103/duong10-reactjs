import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from "./components/ProductList";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import ItemDetail from "./components/ItemDetail";
import TodoList from "./components/TodoList";
import Layout from "./components/Layout";
import result from "./data.json"



function App() {
  const data = {};
  const [name, setName] = useState("");
  const [img_url, setImg_url] = useState("");
  const [price, setPrice] = useState("");
  const [final_price, setfinal_price] = useState("");
  const [itemInCart, setItemInCart] = useState({})
  const [dataGlobal, setdataGlobal] = useState(result)
  const onClickBtn = (name, img_url, price, final_price) => {
    setName(name)
    setImg_url(img_url)
    setPrice(price)
    setfinal_price(final_price)
    setItemInCart(itemInCart + [name, price])
  };
  console.log(itemInCart)

  const lowToHigh = (e) => {
    e.preventDefault();
    const sortedList = dataGlobal.data.sort((a,b)=> a.final_price - b.final_price);
    data.data = sortedList
    setdataGlobal(data)
  };
  const highToLow = (e) => {
    e.preventDefault();
    const sortedList = dataGlobal.data.sort((a,b)=> b.final_price - a.final_price);
    data.data = sortedList
    setdataGlobal(data)
  };
  const aToZ = (e) => {
    e.preventDefault();
    const sortedList = dataGlobal.data.sort((a,b)=> 
    a["name"].localeCompare(b["name"], "vi", { sensitivity: "base" }));
    data.data = sortedList
    setdataGlobal(data)
  };
  const zToA = (e) => {
    e.preventDefault();
    const sortedList = dataGlobal.data.sort((a,b)=> 
    b["name"].localeCompare(a["name"], "vi", { sensitivity: "base" }));
    data.data = sortedList
    setdataGlobal(data)
  };
  const filterSale = () => {
    const sortedList = dataGlobal.data.filter(e => e.promotion_percent >= 20);
    data.data = sortedList
    setdataGlobal(data)
  };



  return (
    <Layout name={name} img_url={img_url} price={price}
      final_price={final_price}>
      {/* <!-- header start --> */}

      {/* <!-- header end --> */}

      {/* <!-- ProductList start --> */}
      <ProductList {...dataGlobal} clickFromItem={onClickBtn}
        aToZ={aToZ} zToA={zToA} highToLow={highToLow} lowToHigh={lowToHigh} filterSale={filterSale}/>
      {/* <ItemDetail /> */}
      {/* <LoginForm /> */}
      {/* <RegisterForm /> */}
      {/* <TodoList /> */}
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
