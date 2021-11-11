import { SEE_DETAILED} from "../action-types/SeeDetailed-actiontypes";

export const SetDeailedInfo = (data) => {
    // console.log('Triggerd Detailed Recipe');
    return {
        type: SEE_DETAILED,
        payload: data
    }
}