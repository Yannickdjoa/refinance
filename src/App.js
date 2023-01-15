import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/generalComponents/navbar/NavBar';
import { Home } from "../src/components/pages/Home";
import { Profile } from "../src/components/pages/Profile";
import { Contact } from "../src/components/pages/Contact";



function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
