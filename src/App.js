import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Developers from "./components/Developers"
import Subscribe from "./components/Subscribe"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Developers></Developers>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
}

export default App;
