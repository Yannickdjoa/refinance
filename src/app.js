import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './app.css';
import NavBar from './components/generalComponents/navbar/NavBar';
import { SideBar } from './components/generalComponents/SideBar/sideBar';
import SearchResults from './components/search/searchResults';

import PostsList from "./components/post/cryptoMarket/PostsList";
import BitcoinNewsList from './components/Posts/BitcoinNews/BitcoinNewsList';
import RelaxationList from './components/post/relaxtime/relaxationList';
import RealestateList from "./components/post/realestate/realestateList";
import GameList from "./components/post/game/gameList";
import InvestmentsList from './components/post/investments/investmentsList';
import InspirationList from './components/post/inspiration/inspirationList';
import MoneyList from './components/post/money/moneyList';

import SinglePostPage from './components/post/cryptoMarket/singlePostPage';
import BitcoinPage from './components/post/bitcoinNews/bitcoinPage';
import RelaxationPage from './components/post/relaxtime/relaxationPage';
import RealestatePage from './components/post/realestate/realestatePage';
import GamePage from './components/post/game/gamePage';
import InvestmentPage from './components/post/investments/investmentPage';
import InspirationPage from './components/post/inspiration/inspirationPage';
import MoneyPage from './components/post/money/moneyPage';
import SearchPage from './components/search/searchPage';

import { selectAllPosts } from './components/post/cryptoMarket/cryptoMarketSlice';
import { selectAllBitcoin } from './components/post/bitcoinNews/bitcoinSlice';
import { useSelector } from 'react-redux';
import { selectAllRelaxation } from './components/post/relaxtime/realaxationSlice';
import { selectAllRealestate } from './components/post/realestate/realestateSlice';
import { selectAllGame } from './components/post/game/gameSlice';
import { selectAllInvestments } from './components/post/investments/investmentsSlice';
import { selectAllInspiration } from './components/post/inspiration/inspirationSlice';
import { selectAllMoney } from './components/post/money/moneySlice';
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
