import React from "react";
import Header from "./components/header";
import Headtitle from './components/headtitle';
import { Items, RecipeItems} from './components/items';
import Carousel from "./components/carousel";
import Footer from "./components/footer";
// import AddItems from "./components/addItems";
import {  ItemProvider, RecipeProvider, TrendingProvider } from "./components/itemContext";
import './App.css';
import Trending from "./components/Trending";
import { CartItemProvider } from "./components/CartItemContext";

function App() {
  return (
    <div>
      <CartItemProvider>
      <Header />
      <Carousel />
      <Headtitle title="This is head title."/>
        <TrendingProvider>
          <Trending />
        </TrendingProvider>
        
        <ItemProvider>
          {/* <Items /> */}
        </ItemProvider>
          <RecipeProvider>
            {/* <RecipeItems /> */}
          </RecipeProvider>
          {/* <AddItems /> */}
      </CartItemProvider>
      <Footer />
    </div>
  );
}

export default App;
