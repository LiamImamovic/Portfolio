import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Projects from "./pages/Projects.jsx"
import Contact from "./pages/Contact.jsx"

function App() {

  return (
    <div className="App overflow-hidden">
      <Router>
        <Routes>
          <Route path="#" element={<h1>Not Found</h1>} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
