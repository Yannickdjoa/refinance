import { configureStore } from '@reduxjs/toolkit';
import postsReducer from "../components/post/cryptoMarket/cryptoMarketSlice";
import bitcoinReducer from "../components/post/bitcoinNews/bitcoinSlice";
import relaxationReducer from "../components/post/relaxtime/realaxationSlice";
import realestateReducer from '../components/post/realestate/realestateSlice';
import gameReducer from '../components/post/game/gameSlice';
import inspirationReducer from '../components/post/inspiration/inspirationSlice';
import investmentsReducer from '../components/post/investments/investmentsSlice';
import moneyReducer from '../components/post/money/moneySlice';

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
