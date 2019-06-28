import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from "./components/ProductList";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import ItemDetail from "./components/ItemDetail";
import TodoList from "./components/TodoList";
import Layout from "./components/Layout";
import result from "./data.json";
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  const [itemInCart, setItemInCart] = useState([]);
  const [dataGlobal, setdataGlobal] = useState(result.data);
  const [totalCart, setTotalCart] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const onClickBtn = (props) => {
    // console.log(itemInCart.length)
    // itemInCart.push([{...props, so_luong: 1}])
    // first times => thêm mới vào
    if(itemInCart.length === 0){
      itemInCart.push({...props, so_luong: 0 })
    }

    //Tìm các giá trị trùng nhau trong giỏ hàng
    const existProductInCart = itemInCart.find(product => product.product_id === props.product_id)
    console.log(existProductInCart)
    // Nếu trả ra true nghĩa là có giá trị trùng
    if (existProductInCart) {
      const newCart = itemInCart.map(product => {
        if (product.product_id === props.product_id) {
          return {...product, so_luong: product.so_luong + 1}
        }
        return product
      })
      setItemInCart(newCart)
      console.log(newCart)
      
    }
    if(!existProductInCart){
      itemInCart.push({...props, so_luong: 1 })
    }

    setTotalCart(itemInCart.map(ele => ele).reduce((a, b) => a.final_price*a.so_luong + b.final_price*b.so_luong))
    setTotalItem(totalItem + 1)
  };

  const lowToHigh = (e) => {
    e.preventDefault();
    const sortedList = dataGlobal.sort((a, b) => a.final_price - b.final_price);
    setdataGlobal(sortedList)
  };
  const highToLow = (e) => {
    e.preventDefault();
    const sortedList = dataGlobal.sort((a, b) => b.final_price - a.final_price);
    setdataGlobal(sortedList)
  };
  const aToZ = (e) => {
    e.preventDefault();
    const sortedList = dataGlobal.sort((a, b) =>
      a["name"].localeCompare(b["name"], "vi", { sensitivity: "base" }));
    setdataGlobal(sortedList)
  };
  const zToA = (e) => {
    e.preventDefault();
    const sortedList = dataGlobal.sort((a, b) =>
      b["name"].localeCompare(a["name"], "vi", { sensitivity: "base" }));
    setdataGlobal(sortedList)
  };
  const filterSale = (e) => {
    e.preventDefault();
    const sortedList = dataGlobal.data.filter(e => e.promotion_percent >= 20);
    setdataGlobal(sortedList)
  };



  return (
    <Layout dataInCart={itemInCart} totalCart={totalCart} totalItem={totalItem}>
      {/* <!-- header start --> */}

      {/* <!-- header end --> */}

      <Router>
        <Route path="/" exact render={() => (<ProductList data={dataGlobal} clickFromItem={onClickBtn}
          aToZ={aToZ} zToA={zToA} highToLow={highToLow} lowToHigh={lowToHigh} filterSale={filterSale} />
        )}
        />
        <Route path="/details" component={ItemDetail} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
      </Router>

      {/* <!-- ProductList start --> */}
      {/*  */}
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
