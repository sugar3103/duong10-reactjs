import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from "firebase";
// import ProductList from "./components/ProductList";
// import RegisterForm from "./components/RegisterForm";
// import LoginForm from "./components/LoginForm";
// import ProductDetail from "./components/ProductDetail";
import TodoList from "./components/TodoList";
import Page404 from "./components/Page404";
import Loading from "./components/Loading";
import Layout from "./components/Layout";
import result from "./data.json";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as initFirebase from './firebaseConfig';

const ProductList = React.lazy(() => import("./components/ProductList"));
const RegisterForm = React.lazy(() => import("./components/RegisterForm"));
const LoginForm = React.lazy(() => import("./components/LoginForm"));
const ProductDetail = React.lazy(() => import("./components/ProductDetail"));
function App() {
  
  try {
    firebase.auth().onAuthStateChanged((user) => {
      if (user === null) {
        // <Link to={"./login"}></Link>
        console.log("the user is NULL")
      } else {
        // <Link to={"./register"}></Link>;
        console.log(user)
      }
      console.log(user)
    })
  } catch (error) {
    console.log(error)
  }

  const [itemInCart, setItemInCart] = useState([]);
  const [dataGlobal, setdataGlobal] = useState(result.data);
  const [totalCart, setTotalCart] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const [selectedItem, setSelectedItem] = useState()

  const onClickBtn = (props) => {
    if (itemInCart.length === 0) {
      itemInCart.push({ ...props, so_luong: 1 });
    }
    const existProductInCart = itemInCart.find(product => product.product_id === props.product_id)
    // Bị trùng sản phẩm trong giỏ hàng => cập nhật số lương
    if (existProductInCart) {
      const newCart = itemInCart.map(product => {
        if (product.product_id === props.product_id) {
          return {
            ...product,
            so_luong: product.so_luong + 1
          }
        }
        return product
      })

      setItemInCart(newCart)
    } else {
      // chưa có sản phẩm này trong giỏ hàng => thêm mới vào
      itemInCart.push({ ...props, so_luong: 1 })
    }

    setTotalCart(itemInCart.map(ele => ele.final_price * ele.so_luong).reduce((a, b) => a + b))
    setTotalItem(totalItem + 1)
  };
  const findSelectedItem = (productId) => {
    const item = result.data.find(item => item.product_id === parseInt(productId, 10))
    setSelectedItem(item)
  }


  console.log("Total Cart : ", totalCart)
  console.log("Total Item : ", totalItem)

  const lowToHigh = (e) => {
    e.preventDefault();
    const sortedList = dataGlobal.sort((a, b) => a.final_price - b.final_price);
    setdataGlobal([...sortedList])
  };
  const highToLow = (e) => {
    e.preventDefault();
    const sortedList = dataGlobal.sort((a, b) => b.final_price - a.final_price);
    setdataGlobal([...sortedList])
  };
  const aToZ = (e) => {
    e.preventDefault();
    const sortedList = dataGlobal.sort((a, b) =>
      a["name"].localeCompare(b["name"], "vi", { sensitivity: "base" }));
    setdataGlobal([...sortedList])
  };
  const zToA = (e) => {
    e.preventDefault();
    const sortedList = dataGlobal.sort((a, b) =>
      b["name"].localeCompare(a["name"], "vi", { sensitivity: "base" }));
    setdataGlobal([...sortedList])
  };
  const filterSale = (e) => {
    e.preventDefault();
    const sortedList = dataGlobal.filter(e => e.promotion_percent >= 20);
    setdataGlobal([...sortedList])
  };

  return (
    <Router>
      {/* The Layout is included Headers and Footers */}
      <Layout data={itemInCart} totalCart={totalCart} totalItem={totalItem}>
        {/* <!-- header start --> */}

        {/* <!-- header end --> */}
        <React.Suspense fallback={<Loading />}>
          <Switch>

            <Route path="/" exact render={() => (<ProductList data={dataGlobal} clickFromItem={onClickBtn}
              aToZ={aToZ} zToA={zToA} highToLow={highToLow} lowToHigh={lowToHigh} filterSale={filterSale} />)}
            />
            <Route path="/product-detail/:id" render={(propsOfRouter) => (<ProductDetail {...propsOfRouter}
              selectedItem={selectedItem} findSelectedItem={findSelectedItem} />)}
            />
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            {/* <Route path="/loading" component={Loading} /> */}
            <Route component={Page404} />
          </Switch>
        </React.Suspense>
        {/* <!-- ProductList start --> */}
        {/*  */}
        {/* <ItemDetail /> */}
        {/* <LoginForm /> */}
        {/* <RegisterForm /> */}
        {/* <TodoList /> */}

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
    </Router>
  );
}

export default App;
