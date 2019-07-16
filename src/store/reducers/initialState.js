export const initialState = {
    inputValue : '',
    isLoading : false,
    currentDay : new Date().getDay(),
    forecastData : [],
    currentData : [],
    inputArray: [],
    duplicateRequestMessage: false,
    city: undefined,
    errorCode: null,
    errorMessage: null
};