import { configureStore } from '@reduxjs/toolkit';
import postsReducer from "../components/Posts/cryptoMarket/cryptoMarketSlice";
import bitcoinReducer from "../components/Posts/bitcoinNews/bitcoinSlice";
import relaxationReducer from "../components/Posts/relaxTime/realaxationSlice";
import realestateReducer from '../components/Posts/realEstate/realestateSlice';
import gameReducer from '../components/Posts/game/gameSlice';
import inspirationReducer from '../components/Posts/inspiration/inspirationSlice';
import investmentsReducer from '../components/Posts/investments/investmentsSlice';
import moneyReducer from '../components/Posts/money/moneySlice';

import searchReducer from "../components/search/researchSlice";


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
