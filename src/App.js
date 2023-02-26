import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/generalComponents/navbar/NavBar';
import { SideBar } from './components/generalComponents/SideBar/sideBar';
import SearchResults from './components/Search/SearchResults';

import PostsList from "./components/Posts/CryptoMarket/PostsList";
import BitcoinNewsList from './components/Posts/BitcoinNews/BitcoinNewsList';
import RelaxationList from './components/Posts/RelaxTime/RelaxationList';
import RealestateList from "./components/Posts/RealEstate/RealestateList";
import GameList from "./components/Posts/Game/GameList";
import InvestmentsList from './components/Posts/Investments/InvestmentsList';
import InspirationList from './components/Posts/Inspiration/InspirationList';
import MoneyList from './components/Posts/Money/MoneyList';

import SinglePostPage from './components/Posts/CryptoMarket/singlePostPage';
import BitcoinPage from './components/Posts/BitcoinNews/BitcoinPage';
import RelaxationPage from './components/Posts/RelaxTime/RelaxationPage';
import RealestatePage from './components/Posts/RealEstate/RealestatePage';
import GamePage from './components/Posts/Game/GamePage';
import InvestmentPage from './components/Posts/Investments/investmentPage';
import InspirationPage from './components/Posts/Inspiration/InspirationPage';
import MoneyPage from './components/Posts/Money/MoneyPage';
import SearchPage from './components/Search/searchPage';

import { selectAllPosts } from './components/Posts/CryptoMarket/CryptoMarketSlice';
import { selectAllBitcoin } from './components/Posts/BitcoinNews/BitcoinSlice';
import { useSelector } from 'react-redux';
import { selectAllRelaxation } from './components/Posts/RelaxTime/RealaxationSlice';
import { selectAllRealestate } from './components/Posts/RealEstate/RealestateSlice';
import { selectAllGame } from './components/Posts/Game/GameSlice';
import { selectAllInvestments } from './components/Posts/Investments/investmentsSlice';
import { selectAllInspiration } from './components/Posts/Inspiration/InspirationSlice';
import { selectAllMoney } from './components/Posts/Money/MoneySlice';
import { selectResearch } from './components/Search/researchSlice';

function App() {
  const posts=useSelector(selectAllPosts);
  const bitcoin= useSelector(selectAllBitcoin);
  const relaxation= useSelector(selectAllRelaxation);
  const realestate= useSelector(selectAllRealestate);
  const games= useSelector(selectAllGame);
  const investments= useSelector(selectAllInvestments);
  const inspirations= useSelector(selectAllInspiration);
  const money= useSelector(selectAllMoney);
  const searchPost= useSelector(selectResearch)
  return (
    <>
      <div className='navbar-container'>
        <NavBar />
      </div>
      <div className='sideBar-container'>
        <SideBar />
        <Routes>
          <Route path="/" element={<PostsList/>}/>
          <Route path="/:search">
            <Route index element={<SearchResults searchPost={searchPost}/>} />
            <Route path=":searchId" element={<SearchPage searchPost={searchPost}/>} />
          </Route>
          <Route path="/postsList">
            <Route index element={<PostsList posts={posts}/>}/>
            <Route path=":postId" element={<SinglePostPage posts={posts}/>} />
          </Route>
          <Route path='/bitcoinnews'>
            <Route index element={<BitcoinNewsList bitcoin={bitcoin}/>} />
            <Route path=":bitId" element={<BitcoinPage bitcoin={bitcoin}/>} />
          </Route>
          <Route path='/relaxation'>
            <Route index element={<RelaxationList relaxation={relaxation}/>} />
            <Route path=":relaxId" element={<RelaxationPage relaxation={relaxation}/>} />
          </Route>
          <Route path='/realestate'>
            <Route index element={<RealestateList realestate={realestate}/>} />
            <Route path=":realId" element={<RealestatePage realestate={realestate}/>} />
          </Route>
          <Route path='/games'>
            <Route index element={<GameList games={games}/>} />
            <Route path=":gaId" element={<GamePage games={games}/>} />
          </Route>
          <Route path='/investments'>
            <Route index element={<InvestmentsList investments={investments}/>} />
            <Route path=":invId" element={<InvestmentPage investments={investments}/>} />
          </Route>
          <Route path='/inspirations'>
            <Route index element={<InspirationList inspirations={inspirations}/>} />
            <Route path=":inspId" element={<InspirationPage inspirations={inspirations}/>} />
          </Route>
          <Route path='/money'>
            <Route index element={<MoneyList money={money}/>} />
            <Route path=":monId" element={<MoneyPage money={money}/>} />
          </Route>
        </Routes>
      </div>
    </>
    
  );
}


export default App;
