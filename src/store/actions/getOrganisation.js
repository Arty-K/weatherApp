import parse from "parse-link-header";


export const getOrganisation = ( orgName ) => {
    return ( dispatch ) => {
        let newData;

        if ( orgName !== '' ) {
            Promise.all([
                fetch(`https://api.github.com/orgs/${ orgName }`)
                    .then(response => response.json()
                        .then(data => {
                            newData = { currentOrganisation: data }
                        }
                        )
                    ),
                fetch(`https://api.github.com/orgs/${ orgName }/members`)
                    .then(response => response.json()
                        .then(data => {
                            newData = {
                                ...newData,
                                usersLinks:parse(response.headers.get('link')),
                                usersList:data
                                }
                            }
                        )
                    ),
                fetch(`https://api.github.com/orgs/${ orgName }/public_members`)
                    .then(response => response.json()
                        .then(data => {
                            newData = {
                                ...newData,
                                collaboratorsLinks : parse(response.headers.get('link')),
                                collaboratorsList : data,
                                isLoading : false
                            }

                            }
                        )
                    )
            ]).then(() => {
                dispatch({type:'GET_ORGANISATION', newData})
            }).catch((error) => {
                dispatch({ type: 'GET_ORGANISATION_ERROR', error })}
                );
        }
    }
};