import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductList from "./components/ProuductList";
import CheckoutAd from "./components/CheckoutAd";
import ShoppingBasket from "./components/ShoppingBasket";
import React from "react";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={
          <React.Fragment>
            <Header/>
            <Banner/>
            <ProductList/>
          </React.Fragment>
        }/>
        <Route exact path='/checkout' element={
          <React.Fragment>
            <Header/>
            <CheckoutAd/>
            <ShoppingBasket/>
          </React.Fragment>
        } />
        <Route exact path='/login' element={
          <Login />
        } />
      </Routes>
    </Router>
  );
}

export default App;
// echo "# Amazon_clone_by_me" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/vishalmanjhi98/Amazon_clone_by_me.git
// git push -u origin main
