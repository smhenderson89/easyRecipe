import { SEE_DETAILED } from "../action-types/SeeDetailed-actiontypes";

const initialState = []

export const DetailedReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEE_DETAILED:
            return state = [action.payload]
            // Spread operator, pushes to the array
        default:
            return state;
    }
}