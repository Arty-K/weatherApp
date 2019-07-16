export const onHistoryClick = ( item ) => {
    return (dispatch,getState) => {
        let newData={};
        newData = {
            ...newData,
            city: getState().inputArray.indexOf(item),

        };
        dispatch({ type:'ON_HISTORY_CLICK', newData })
    }
};