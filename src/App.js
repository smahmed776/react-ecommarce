import React from "react";
import Header from "./components/header";
import { Items, RecipeItems} from './components/items';
import Carousel from "./components/carousel";
import Footer from "./components/footer";

import { Route, Switch } from "react-router-dom"

import './App.css';
import Trending from "./components/Trending";
import CheckOut from "./pages/checkout";
import Product from "./pages/product/product";



function App() {

  return (
    <div>
          <Header />
      <Switch> 
        <Route exact path="/">
          <Carousel />      
          <Trending />
          <Items />
          <RecipeItems />
        </Route>        
        <Route path="/product" component={Product}/>
        <Route exact path="/checkout">
          <CheckOut />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
