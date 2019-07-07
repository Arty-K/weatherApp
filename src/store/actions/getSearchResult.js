import parse from "parse-link-header";


export const getSearchResult = ( input ) => {
    return ( dispatch ) => {
        let newData;
        fetch(`https://api.github.com/search/users?q=${input}+type:org`)
            .then(response => response.json()
                .then(data => {
                    newData = {
                        organisationLinks: parse(response.headers.get('link')),
                        organisationList: data,
                        activePage: '1',
                        isLoading: false
                        }
                    }
                ).then(() => {
                    dispatch({type:'GET_SEARCH_RESULT', newData})
                })
            )
            .catch((error) => {
                dispatch({ type: 'GET_SEARCH_RESULT_ERROR', error })});
    }
};