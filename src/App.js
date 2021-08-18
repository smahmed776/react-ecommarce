import React from "react";
import Header from "./components/header";
import Headtitle from './components/headtitle';
import Items from './components/items';
import Carousel from "./components/carousel";
import Footer from "./components/footer";
import AddItems from "./components/addItems";
import { ItemProvider, TrendingProvider } from "./components/itemContext";
import './App.css';
import Trending from "./components/Trending";

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <Headtitle title="This is head title."/>
      <TrendingProvider>
        <Trending />
      </TrendingProvider>
      <ItemProvider>
      <Items />
      <AddItems />
      </ItemProvider>
      <Footer />
    </div>
  );
}

export default App;
