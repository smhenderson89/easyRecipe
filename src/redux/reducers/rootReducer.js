import { combineReducers } from 'redux';
import { Favorites } from "./FavoriteRecipeReducer"
import { DetailedReducer } from './SeeDetailedReducer';

// import DetailedReducer from './SeeDetailedReducer';
// Detailed: DetailedReducer

const rootReducer = combineReducers ({
    Favorites, DetailedReducer
})

export default rootReducer;