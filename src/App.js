import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"

function App() {

  return (
    <div className="App overflow-hidden">
      <Router>
        <Routes>
          <Route path="#" element={<h1>Not Found</h1>} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
