import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App';
import { HashRouter } from 'react-router-dom';
import { CartItemProvider } from "./components/CartItemContext";
import {  ItemProvider, RecipeProvider, TrendingProvider } from "./components/itemContext";
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider, IsAuthContextProvider } from './components/auth/authContext';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <CartItemProvider>
        <ItemProvider>
          <RecipeProvider>
            <TrendingProvider>
              <AuthContextProvider>
                <IsAuthContextProvider>
                  <App />
                </IsAuthContextProvider>
              </AuthContextProvider>

            </TrendingProvider>
          </RecipeProvider>
        </ItemProvider>
      </CartItemProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
