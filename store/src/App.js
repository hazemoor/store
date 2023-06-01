import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Catalog from "./pages/Catalog";
import Basket from "./pages/Basket";
import NotFound from "./pages/NotFound";

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}/>  
        <Route path="/catalog" element={<Catalog />}/>
        <Route path="/basket" element={<Basket />}/>
        <Route path="*" element={<NotFound />}/>
        <Route />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
