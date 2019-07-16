const API_KEY = 'e14fc80285290779ed2c4996efdfd3a3';


export const getSearchResult = ( input ) => {
    return ( dispatch, getState ) => {
        let newData={};
        //check input to prevent duplicate requests
        if (!getState().inputArray.includes(input)) {
            //show spinner when fetch request start
            dispatch({ type : 'SEARCH_RESULT_LOADING' });
            //fetch extended forecast
            dispatch({ type:'PUSH_DUPLICATE_MESSAGE_FALSE' });

            let getCitiesArray = getState().inputArray;
                if ( getCitiesArray.length < 5 ) {
                    getCitiesArray.unshift( input );
                    newData = {
                        ...newData,
                        inputArray : getCitiesArray,
                    };
                    dispatch({ type:'PUSH_INPUT_HISTORY', newData})
                } else {
                    getCitiesArray.pop();
                    getCitiesArray.unshift( input );
                    newData = {
                        ...newData,
                        inputArray : getCitiesArray
                    };
                    dispatch({ type:'PUSH_INPUT_HISTORY', newData})
                }

            Promise.all([
                fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&units=metric&appid=${API_KEY}`)
                    .then(response => response.json()
                        .then(data => {
                            //check if our request was successful
                            if(data.cod.toString() === '200'){
                                //create a copy of state and push a new data into it
                                let copy = getState().forecastData;
                                copy.unshift(data.list);
                                newData = {
                                    ...newData,
                                    forecastData: copy,
                                    inputValue: input,

                                }
                            //if our request wasn't successful, throw err
                            } else {
                                newData = {
                                    ...newData,
                                    errorCode: data.cod,
                                    errorMessage: data.message

                                };
                                dispatch({ type: 'GET_SEARCH_RESULT_ERROR', newData })
                            }
                        })
                    ),
                //fetch current forecast data
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${API_KEY}`)
                    .then(response => response.json()
                            .then(data => {
                                if(data.cod.toString() === '200') {
                                    let copy= getState().currentData;
                                    copy.unshift(data);
                                    newData = {
                                        ...newData,
                                        currentData: copy,
                                        inputValue: input,
                                    }
                                } else {
                                    newData = {
                                        ...newData,
                                        errorCode: data.cod,
                                        errorMessage: data.message

                                    };
                                    dispatch({ type: 'GET_SEARCH_RESULT_ERROR', newData })
                                }
                            })
                    ),
            ]).then(() => {
                dispatch({ type:'GET_SEARCH_RESULT_SUCCESS', newData})
            }).catch((error) => {
                console.log(error);
            })
        } else {
            dispatch({ type:'PUSH_DUPLICATE_MESSAGE_TRUE' })
        }
    }
};