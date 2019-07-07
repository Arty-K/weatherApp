import parse from "parse-link-header";


export const paginationClickOrganisation = ( page ) => {
    return ( dispatch,getState ) => {
        let newData;
        console.log(
            `from paginationClickOrganisation
            page param - ${page} ,
            active page from state- ${getState().activePage} ,
            links from state - ${Object.keys(getState().organisationLinks)}`
        );
        let activePage = getState().activePage;
        const url = getState().organisationLinks;

        if ( page === 'next') {
            activePage = url.next.page;
                fetch(url.next.url)
                .then(response => response.json()
                    .then(data => {
                            newData = {
                                ...newData,
                                organisationLinks: parse(response.headers.get('link')),
                                organisationList: data,
                                activePage: activePage,
                                isLoading: false
                            }
                        }
                    )
                ).then(() => {
                    dispatch({type:'CLICK_ORGANISATION', newData})
                })
                .catch((error) => {
                    dispatch({ type: 'CLICK_ORGANISATION_ERROR', error })
                });
        }

        if ( page === 'prev') {
            activePage = url.prev.page;
            fetch(url.prev.url)
                .then(response => response.json()
                    .then(data => {
                            newData = {
                                ...newData,
                                organisationLinks: parse(response.headers.get('link')),
                                organisationList: data,
                                activePage: activePage,
                                isLoading: false
                            }
                        }
                    )
                ).then(() => {
                dispatch({type:'CLICK_ORGANISATION', newData})
            })
                .catch((error) => {
                    dispatch({ type: 'CLICK_ORGANISATION_ERROR', error })
                });
        }

        if ( page === 'first') {
            activePage = url.first.page;
            fetch(url.first.url)
                .then(response => response.json()
                    .then(data => {
                            newData = {
                                ...newData,
                                organisationLinks: parse(response.headers.get('link')),
                                organisationList: data,
                                activePage: activePage,
                                isLoading: false
                            }
                        }
                    )
                ).then(() => {
                dispatch({type:'CLICK_ORGANISATION', newData})
            })
                .catch((error) => {
                    dispatch({ type: 'CLICK_ORGANISATION_ERROR', error })
                });
        }

        if ( page === 'last') {
            activePage = url.last.page;
            fetch(url.last.url)
                .then(response => response.json()
                    .then(data => {
                            newData = {
                                ...newData,
                                organisationLinks: parse(response.headers.get('link')),
                                organisationList: data,
                                activePage: activePage,
                                isLoading: false
                            }
                        }
                    )
                ).then(() => {
                dispatch({type:'CLICK_ORGANISATION', newData})
            })
                .catch((error) => {
                    dispatch({ type: 'CLICK_ORGANISATION_ERROR', error })
                });
        }
}};

export const paginationClickUsers = ( page ) => {
    return ( dispatch,getState ) => {
        let newData;
        console.log(
            `from paginationClickUsers
            page param - ${page} ,
            active page from state- ${getState().activePage} ,
            links from state - ${Object.keys(getState().usersLinks)}`
        );
        let activePage = getState().activePage;
        const url = getState().usersLinks;

        if ( page === 'next') {
            activePage = url.next.page;
            fetch(url.next.url)
                .then(response => response.json()
                    .then(data => {
                            newData = {
                                ...newData,
                                usersLinks: parse(response.headers.get('link')),
                                usersList: data,
                                activePage: activePage,
                                isLoading: false
                            }
                        }
                    )
                ).then(() => {
                dispatch({type:'CLICK_USERS', newData})
            })
                .catch((error) => {
                    dispatch({ type: 'CLICK_USERS_ERROR', error })
                });
        }

        if ( page === 'prev') {
            activePage = url.prev.page;
            fetch(url.prev.url)
                .then(response => response.json()
                    .then(data => {
                            newData = {
                                ...newData,
                                usersLinks: parse(response.headers.get('link')),
                                usersList: data,
                                activePage: activePage,
                                isLoading: false
                            }
                        }
                    )
                ).then(() => {
                dispatch({type:'CLICK_USERS', newData})
            })
                .catch((error) => {
                    dispatch({ type: 'CLICK_USERS_ERROR', error })
                });
        }

        if ( page === 'first') {
            activePage = url.first.page;
            fetch(url.first.url)
                .then(response => response.json()
                    .then(data => {
                            newData = {
                                ...newData,
                                usersLinks: parse(response.headers.get('link')),
                                usersList: data,
                                activePage: activePage,
                                isLoading: false
                            }
                        }
                    )
                ).then(() => {
                dispatch({type:'CLICK_USERS', newData})
            })
                .catch((error) => {
                    dispatch({ type: 'CLICK_USERS_ERROR', error })
                });
        }

        if ( page === 'last') {
            activePage = url.last.page;
            fetch(url.last.url)
                .then(response => response.json()
                    .then(data => {
                            newData = {
                                ...newData,
                                usersLinks: parse(response.headers.get('link')),
                                usersList: data,
                                activePage: activePage,
                                isLoading: false
                            }
                        }
                    )
                ).then(() => {
                dispatch({type:'CLICK_USERS', newData})
            })
                .catch((error) => {
                    dispatch({ type: 'CLICK_USERS_ERROR', error })
                });
        }
    }};

export const paginationClickCollaborators = ( page ) => {
    return ( dispatch,getState ) => {
        let newData;
        console.log(
            `from paginationClickCollaborators
            page param - ${page} ,
            active page from state- ${getState().activePage} ,
            links from state - ${Object.keys(getState().collaboratorsLinks)}`
        );
        let activePage = getState().activePage;
        const url = getState().collaboratorsLinks;

        if ( page === 'next') {
            activePage = url.next.page;
            fetch(url.next.url)
                .then(response => response.json()
                    .then(data => {
                            newData = {
                                ...newData,
                                collaboratorsLinks: parse(response.headers.get('link')),
                                collaboratorsList: data,
                                activePage: activePage,
                                isLoading: false
                            }
                        }
                    )
                ).then(() => {
                dispatch({type:'CLICK_COLLABORATORS', newData})
            })
                .catch((error) => {
                    dispatch({ type: 'CLICK_COLLABORATORS_ERROR', error })
                });
        }

        if ( page === 'prev') {
            activePage = url.prev.page;
            fetch(url.prev.url)
                .then(response => response.json()
                    .then(data => {
                            newData = {
                                ...newData,
                                collaboratorsLinks: parse(response.headers.get('link')),
                                collaboratorsList: data,
                                activePage: activePage,
                                isLoading: false
                            }
                        }
                    )
                ).then(() => {
                dispatch({type:'CLICK_COLLABORATORS', newData})
            })
                .catch((error) => {
                    dispatch({ type: 'CLICK_COLLABORATORS_ERROR', error })
                });
        }

        if ( page === 'first') {
            activePage = url.first.page;
            fetch(url.first.url)
                .then(response => response.json()
                    .then(data => {
                            newData = {
                                ...newData,
                                collaboratorsLinks: parse(response.headers.get('link')),
                                collaboratorsList: data,
                                activePage: activePage,
                                isLoading: false
                            }
                        }
                    )
                ).then(() => {
                dispatch({type:'CLICK_COLLABORATORS', newData})
            })
                .catch((error) => {
                    dispatch({ type: 'CLICK_COLLABORATORS_ERROR', error })
                });
        }

        if ( page === 'last') {
            activePage = url.last.page;
            fetch(url.last.url)
                .then(response => response.json()
                    .then(data => {
                            newData = {
                                ...newData,
                                collaboratorsLinks: parse(response.headers.get('link')),
                                collaboratorsList: data,
                                activePage: activePage,
                                isLoading: false
                            }
                        }
                    )
                ).then(() => {
                dispatch({type:'CLICK_COLLABORATORS', newData})
            })
                .catch((error) => {
                    dispatch({ type: 'CLICK_COLLABORATORS_ERROR', error })
                });
        }
    }};

export const paginationClickFollowers = ( page ) => {
    return ( dispatch,getState ) => {
        let newData;
        console.log(
            `from paginationClickFollowers
            page param - ${page} ,
            active page from state- ${getState().activePage} ,
            links from state - ${Object.keys(getState().followersLinks)}`
        );
        let activePage = getState().activePage;
        const url = getState().followersLinks;

        if ( page === 'next') {
            activePage = url.next.page;
            fetch(url.next.url)
                .then(response => response.json()
                    .then(data => {
                            newData = {
                                ...newData,
                                followersLinks: parse(response.headers.get('link')),
                                followersList: data,
                                activePage: activePage,
                                isLoading: false
                            }
                        }
                    )
                ).then(() => {
                dispatch({type:'CLICK_FOLLOWERS', newData})
            })
                .catch((error) => {
                    dispatch({ type: 'CLICK_FOLLOWERS_ERROR', error })
                });
        }

        if ( page === 'prev') {
            activePage = url.prev.page;
            fetch(url.prev.url)
                .then(response => response.json()
                    .then(data => {
                            newData = {
                                ...newData,
                                followersLinks: parse(response.headers.get('link')),
                                followersList: data,
                                activePage: activePage,
                                isLoading: false
                            }
                        }
                    )
                ).then(() => {
                dispatch({type:'CLICK_FOLLOWERS', newData})
            })
                .catch((error) => {
                    dispatch({ type: 'CLICK_FOLLOWERS_ERROR', error })
                });
        }

        if ( page === 'first') {
            activePage = url.first.page;
            fetch(url.first.url)
                .then(response => response.json()
                    .then(data => {
                            newData = {
                                ...newData,
                                followersLinks: parse(response.headers.get('link')),
                                followersList: data,
                                activePage: activePage,
                                isLoading: false
                            }
                        }
                    )
                ).then(() => {
                dispatch({type:'CLICK_FOLLOWERS', newData})
            })
                .catch((error) => {
                    dispatch({ type: 'CLICK_FOLLOWERS_ERROR', error })
                });
        }

        if ( page === 'last') {
            activePage = url.last.page;
            fetch(url.last.url)
                .then(response => response.json()
                    .then(data => {
                            newData = {
                                ...newData,
                                followersLinks: parse(response.headers.get('link')),
                                followersList: data,
                                activePage: activePage,
                                isLoading: false
                            }
                        }
                    )
                ).then(() => {
                dispatch({type:'CLICK_FOLLOWERS', newData})
            })
                .catch((error) => {
                    dispatch({ type: 'CLICK_FOLLOWERS_ERROR', error })
                });
        }
    }};

export const paginationClickFollowing = ( page ) => {
    return ( dispatch,getState ) => {
        let newData;
        console.log(
            `from paginationClickFollowing
            page param - ${page} ,
            active page from state- ${getState().activePage} ,
            links from state - ${Object.keys(getState().followingLinks)}`
        );
        let activePage = getState().activePage;
        const url = getState().followersLinks;

        if ( page === 'next') {
            activePage = url.next.page;
            fetch(url.next.url)
                .then(response => response.json()
                    .then(data => {
                            newData = {
                                ...newData,
                                followingLinks: parse(response.headers.get('link')),
                                followingList: data,
                                activePage: activePage,
                                isLoading: false
                            }
                        }
                    )
                ).then(() => {
                dispatch({type:'CLICK_FOLLOWING', newData})
            })
                .catch((error) => {
                    dispatch({ type: 'CLICK_FOLLOWING_ERROR', error })
                });
        }

        if ( page === 'prev') {
            activePage = url.prev.page;
            fetch(url.prev.url)
                .then(response => response.json()
                    .then(data => {
                            newData = {
                                ...newData,
                                followingLinks: parse(response.headers.get('link')),
                                followingList: data,
                                activePage: activePage,
                                isLoading: false
                            }
                        }
                    )
                ).then(() => {
                dispatch({type:'CLICK_FOLLOWING', newData})
            })
                .catch((error) => {
                    dispatch({ type: 'CLICK_FOLLOWING_ERROR', error })
                });
        }

        if ( page === 'first') {
            activePage = url.first.page;
            fetch(url.first.url)
                .then(response => response.json()
                    .then(data => {
                            newData = {
                                ...newData,
                                followingLinks: parse(response.headers.get('link')),
                                followingList: data,
                                activePage: activePage,
                                isLoading: false
                            }
                        }
                    )
                ).then(() => {
                dispatch({type:'CLICK_FOLLOWING', newData})
            })
                .catch((error) => {
                    dispatch({ type: 'CLICK_FOLLOWING_ERROR', error })
                });
        }

        if ( page === 'last') {
            activePage = url.last.page;
            fetch(url.last.url)
                .then(response => response.json()
                    .then(data => {
                            newData = {
                                ...newData,
                                followingLinks: parse(response.headers.get('link')),
                                followingList: data,
                                activePage: activePage,
                                isLoading: false
                            }
                        }
                    )
                ).then(() => {
                dispatch({type:'CLICK_FOLLOWING', newData})
            })
                .catch((error) => {
                    dispatch({ type: 'CLICK_FOLLOWING_ERROR', error })
                });
        }
    }};
