// Uncomment once components have been built

//import React from "react";
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
//import Navbar from './components/Nav';
import Resume from './components/Resume';

import './App.css';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
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
