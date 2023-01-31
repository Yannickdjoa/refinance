import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/generalComponents/navbar/NavBar';
import { Home } from "../src/components/pages/Home";
import { Profile } from "../src/components/pages/Profile";
import { Contact } from "../src/components/pages/Contact";
import PostsList from "./components/SideBar/Subrefinance/PostsList";
import Crypto from "../src/components/SideBar/Subrefinance/Crypto";
import FunnyPictures from "../src/components/SideBar/Subrefinance/FunnyPictures";
import Realestate from "../src/components/SideBar/Subrefinance/Realestate";
import Ipo from "../src/components/SideBar/Subrefinance/Ipo";
import Game from "../src/components/SideBar/Subrefinance/Game";
import ReachPeople from "../src/components/SideBar/Subrefinance/ReachPeople";
import Motivation from "../src/components/SideBar/Subrefinance/Motivation";
import MoneyPictures from "../src/components/SideBar/Subrefinance/MoneyPictures";
import { SubRefinance } from "./components/SideBar/Subrefinance/subrefinance";
import SinglePostPage from './features/posts/post/singlePostPage';
import { SearchButton } from './components/buttons/SearchButton';

function App() {
  return (
    <>
      <div>
        <SearchButton />
      </div>

      <div className='navbar-container'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div className='sideBar-container'>
        <SubRefinance />
        <Routes>
          <Route path="/postsList">
            <Route index element={<PostsList />}/>
            <Route path=":postId" element={<SinglePostPage />} />
          </Route>
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/funnyPictures" element={<FunnyPictures />} />
          <Route path="/realestate" element={<Realestate />} />
          <Route path="/ipo" element={<Ipo />} />
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
