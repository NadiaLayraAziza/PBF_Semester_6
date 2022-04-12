import React from "react";
import logo from "./nc_logo.jpg";
// import cart_logo from "./images/cart_logo.png";
import "./App.css";
import "./css/style.css";
// import { useTable } from "react-table";
import ItemPost from "./ItemPost/ItemPost";
import AboutStateless from "./StatelessComponent/AboutStateless";
import ItemCart from "./ItemCart/ItemCart";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function uts_cart() {
  return (
    <Router>
      <div className="wrapper">
        <div className="top_navbar">
          <div className="hamburger">
            <img src={logo} height="50px"/>
          </div>
          <div className="top_menu">
            <div className="logo">NadiaComp Shop</div>
            <ul>
              <li>
                <Link to="/">
                  <i className="fa fa-home"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="sidebar">
          <ul>
            <li>
              <Link to="/" className="active">
                <span className="icon">
                  <i className="fa fa-home" />
                </span>
                <span className="title">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/list_item">
                <span className="icon">
                  <i className="fa fa-th-list" />
                </span>
                <span className="title">List Product</span>
              </Link>
            </li>
            <li>
              <Link to="/cart_item">
                <span className="icon">
                  <i className="fa fa-shopping-cart" />
                </span>
                <span className="title">Cart</span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span className="icon">
                  <i className="fa fa-address-card" />
                </span>
                <span className="title">About</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/list_item">
          <ListItem />
        </Route>
        <Route exact path="/cart_item">
          <CartItem />
        </Route>
        <Route exact path="/about">
          <AboutStateless />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <div className="wrapper">
      <div className="main_container">
        <div className="item">
          <br /><br />
          <marquee><b style={{ fontSize: 25 }}>Welcome To NadiaComp Shop, Make Your Choice, Enjoy Your Shopping !!!</b></marquee>
          <br />
          <br />
          <div className="home-img">
            <img src="https://wallpapercave.com/wp/wp3169235.jpg" width="900px" height="470px"/>
          </div>
          
        </div>
      </div>
    </div>
  );
}

function ListItem() {
  return <ItemPost />;
}

function CartItem() {
  return <ItemCart />;
}