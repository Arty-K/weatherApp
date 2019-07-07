import parse from "parse-link-header";


export const getUserInfo = ( userName ) => {
    return ( dispatch ) => {
        let newData = { isLoading: true, activePage: '1' };
        if ( userName !== '' ) {
            Promise.all([
                fetch(`https://api.github.com/users/${ userName }`)
                    .then(response => response.json()
                        .then(data => {
                                newData = {
                                    ...newData,
                                    usersLinks: parse(response.headers.get('link')),
                                    currentUser: data
                                }
                            }
                        )
                    ),
                fetch(`https://api.github.com/users/${ userName }/followers`)
                    .then(response => response.json()
                        .then(data => {
                                newData = {
                                    ...newData,
                                    followersLinks: parse(response.headers.get('link')),
                                    followersList: data
                                }
                            }
                        )
                    ),
                fetch(`https://api.github.com/users/${ userName }/following`)
                    .then(response => response.json()
                        .then(data => {
                                newData = {
                                    ...newData,
                                    followingLinks: parse(response.headers.get('link')),
                                    followingList: data,
                                    isLoading: false
                                }

                            }
                        )
                    )
            ]).then(() => {
                dispatch({type:'GET_USER_INFO', newData})
            }).catch((error) => {
                dispatch({ type: 'GET_USER_INFO_ERROR', error })}
            );
        }
    }
};