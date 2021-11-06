import { combineReducers} from "redux";
import { FavoritesList } from "./FavoriteRecipeReducer";
import { SeeDetailedRecipe } from "./SeeDetailedReducer";


const rootReducer = combineReducers ({
    // Put in reducer once created for recipe information
    FavoritesList, SeeDetailedRecipe,
})

export default rootReducer;