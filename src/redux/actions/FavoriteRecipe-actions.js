import { FAVORITE_RECIPE } from "../action-types/FavoriteRecipe-actiontypes" 

export const setRecipeList = (data) => {
    console.log('Triggerd Favorite Recipe');
    return {
        type: FAVORITE_RECIPE,
        payload: data
    }
}