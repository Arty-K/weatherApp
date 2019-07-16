import { initialState } from './initialState';


export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SEARCH_RESULT_LOADING':
            return {
                ...state,
                isLoading : true
            };
        case 'GET_SEARCH_RESULT_ERROR':
            return {
                ...state,
                errorCode:  action.newData.errorCode,
                errorMessage:  action.newData.errorMessage
            };
        case 'GET_SEARCH_RESULT_SUCCESS':
            return {
                ...state,
                inputValue: action.newData.inputValue,
                currentData:action.newData.currentData,
                forecastData : action.newData.forecastData,
                isLoading : false,
            };
        case 'PUSH_INPUT_HISTORY':
            return {
                ...state,
                inputArray : action.newData.inputArray,
            };
        case 'ON_HISTORY_CLICK':
            return {
                ...state,
                city : action.newData.city,
            };
        case 'PUSH_DUPLICATE_MESSAGE_TRUE':
            return {
                ...state,
                duplicateRequestMessage : true,
            };
        case 'PUSH_DUPLICATE_MESSAGE_FALSE':
            return {
                ...state,
                duplicateRequestMessage : false,
            };
        default:
            return state
    }
};