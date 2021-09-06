import React from "react";
import Header from "./components/header";
import Carousel from "./components/carousel";
import Footer from "./components/footer";
import { Route, Switch } from "react-router-dom"
import Trending from "./components/Trending";
import CheckOut from "./pages/checkout";
import Product from "./pages/product/product";
import Categories from "./components/categories";
import Feed from "./components/feed";
import Search from "./components/Search";
import './App.css';



function App() {

  return (
    <div>
      <Header />
      <Switch> 
        <Route exact path="/">
          <Carousel />      
          <Trending />
          <Feed />
        </Route>        
        <Route path="/product" component={Product}/>
        <Route path="/search" component={Search}/>
        <Route exact path="/checkout">
          <CheckOut />
        </Route>
      </Switch>
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
