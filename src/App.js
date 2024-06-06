import React from 'react';
import { CTA, Navbar, Brand } from "./components";
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from "./containers";
import './App.css';
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <CTA />
      <Blog />
      <Features />
      <Possibility />
      <WhatGPT3 />
      <Footer />
    </div>
  );
}

export default App;
