import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/generalComponents/navbar/NavBar';
import Home  from "../src/components/pages/Home";
import { Profile } from "../src/components/pages/Profile";
import { Contact } from "../src/components/pages/Contact";
import PostsList from "./components/Posts/CryptoMarket/PostsList";
import Crypto from "./components/Posts/BitcoinNews/BitcoinNews";
import FunnyPictures from "./components/Posts/RelaxTime/RelaxTime";
import Realestate from "./components/Posts/RealEstate/Realestate";
import Game from "./components/Posts/Game/Game";
import ReachPeople from "./components/Posts/Investments/Investments";
import Motivation from "./components/Posts/Inspiration/Motivation";
import MoneyPictures from "./components/Posts/Money/MoneyPictures";
import { SubRefinance } from "./components/SideBar/sideBar";
import SinglePostPage from './components/Posts/CryptoMarket/singlePostPage';

import { selectAllPosts } from './components/Posts/CryptoMarket/CryptoMarketSlice';
import { useSelector } from 'react-redux';

function App() {
  const posts=useSelector(selectAllPosts)
  return (
    <>
      <div className='navbar-container'>
        <NavBar />
      </div>
      <div className='sideBar-container'>
        <SubRefinance />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/postsList">
            <Route index element={<PostsList posts={posts}/>}/>
            <Route path=":postId" element={<SinglePostPage posts={posts}/>} />
          </Route>
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/funnyPictures" element={<FunnyPictures />} />
          <Route path="/realestate" element={<Realestate />} />
          <Route path="/game" element={<Game />} />
          <Route path="/reachPeople" element={<ReachPeople />} />
          <Route path="/motivation" element={<Motivation />} />
          <Route path="/moneyPictures" element={<MoneyPictures />} />
          <Route path="/singlepost" element={<SinglePostPage />} />
        </Routes>
      </div>
    </>
    
  );
}

export default App;
