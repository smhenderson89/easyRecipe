import { FAVORITE_RECIPE } from "../action-types/FavoriteRecipe-actiontypes";

const initialState = [] // Intial state of the component

export const Favorites = (state = initialState, action) => {
    switch(action.type) {
        case FAVORITE_RECIPE:
            return state = [...state, action.payload] 
            // Spread operator, pushes to the array
        default:
            return state;
    }
}