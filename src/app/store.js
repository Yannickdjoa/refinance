import { configureStore } from '@reduxjs/toolkit';
import postsReducer from "../components/Posts/CryptoMarket/CryptoMarketSlice";
import bitcoinReducer from "../components/Posts/BitcoinNews/BitcoinSlice";
import relaxationReducer from "../components/Posts/RelaxTime/RealaxationSlice";
import realestateReducer from '../components/Posts/RealEstate/RealestateSlice';
import gameReducer from '../components/Posts/Game/GameSlice';
import inspirationReducer from '../components/Posts/Inspiration/InspirationSlice';
import investmentsReducer from '../components/Posts/Investments/investmentsSlice';
import moneyReducer from '../components/Posts/Money/MoneySlice';

import searchReducer from "../components/Search/researchSlice";


export const store = configureStore({
  reducer: {
    posts: postsReducer,
    bitcoin: bitcoinReducer,
    relaxation: relaxationReducer,
    realestate: realestateReducer,
    game: gameReducer,
    inspiration: inspirationReducer,
    investments: investmentsReducer,
    money: moneyReducer,

    search: searchReducer, 

  },
});
