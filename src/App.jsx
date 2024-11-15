// Uncomment once components have been built

import React from "react";
import Header from '../Header';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Footer from '../Footer';
import Navbar from '../Nav';
import Resume from '../Resume';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Resume />
      <Footer />

    </div>
  );
}

export default App;
