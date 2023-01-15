import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/generalComponents/navbar/NavBar';
import { Home } from "../src/components/pages/Home";
import { Profile } from "../src/components/pages/Profile";
import { Contact } from "../src/components/pages/Contact";
import FinanceMarket from "../src/components/SideBar/Subrefinance/FinanceMarket";
import Crypto from "../src/components/SideBar/Subrefinance/Crypto";
import FunnyPictures from "../src/components/SideBar/Subrefinance/FunnyPictures";
import Realestate from "../src/components/SideBar/Subrefinance/Realestate";
import Ipo from "../src/components/SideBar/Subrefinance/Ipo";
import Game from "../src/components/SideBar/Subrefinance/Game";
import ReachPeople from "../src/components/SideBar/Subrefinance/ReachPeople";
import Motivation from "../src/components/SideBar/Subrefinance/Motivation";
import MoneyPictures from "../src/components/SideBar/Subrefinance/MoneyPictures";
import { SubRefinance } from "./components/SideBar/Subrefinance/subrefinance";


function App() {
  return (
    <Router>
      <NavBar/>
      <SubRefinance/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Routes>
        <Route exact path="/financeMarket" element={< FinanceMarket/>} />
        <Route exact path="/crypto" element={< Crypto />} />
        <Route exact path="/funnyPictures" element={< FunnyPictures/>} />
        <Route exact path="/realestate" element={< Realestate/>} />
        <Route exact path="/ipo" element={< Ipo/>} />
        <Route exact path="/game" element={< Game/>} />
        <Route exact path="/reachPeople" element={< ReachPeople/>} />
        <Route exact path="/motivation" element={< Motivation/>} />
        <Route exact path="/moneyPictures" element={< MoneyPictures/>} />
      </Routes>
      
    </Router>
  );
}

export default App;
