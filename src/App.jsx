import Navbar from "./Artshop/Navbar";
import Art_section from "./Artshop/Art_section";
import Contact from "./Artshop/Contact";
import Home from "./Artshop/Home";
import About from "./Artshop/About";
import {  HashRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      {/* router */}
      <div id="app">
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/art" element={<Art_section />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </HashRouter>
      </div>
    </>
    // <>
    //  <Navbar/>
    //  <Art_section/>
    // </>
  );
}

export default App;
