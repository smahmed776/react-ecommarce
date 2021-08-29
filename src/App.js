import React from "react";
import Header from "./components/header";
import Headtitle from './components/headtitle';
import { Items, RecipeItems} from './components/items';
import Carousel from "./components/carousel";
import Footer from "./components/footer";
// import AddItems from "./components/addItems";

import './App.css';
import Trending from "./components/Trending";
import CheckOut from "./pages/checkout";


function App() {
  return (
    <div>
      
      <Header />
      <Carousel />
      <Headtitle title="This is head title."/>  
      <Trending />
      <Items />
      <RecipeItems />
      {/* <AddItems /> */}
      <CheckOut />
      <Footer />
    </div>
  );
}

export default App;
