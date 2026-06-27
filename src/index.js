import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";

import Navbar from './compents/navbar';
import Search from "./compents/search";
import Product from "./compents/product";
import About from "./compents/about";
import Footer from "./compents/footer";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<div>
  <Navbar></Navbar>
  <Search></Search>
  <Product></Product>
  <About></About>
  <Footer></Footer>
</div>
);

