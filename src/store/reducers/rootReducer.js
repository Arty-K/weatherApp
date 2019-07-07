const initialState = {
    inputValue : '',
    error : null,
    isLoading : false,
    activePage : '1',
    organisationList : {},
    organisationLinks : {},
    currentOrganisation : {},
    followersList : [],
    followingList : [],
    followersLinks : {},
    followingLinks : {},
    currentUser : {},
    usersLinks : {},
    usersList : [],
    collaboratorsList : [],
    collaboratorsLinks : {}
};


export const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_SEARCH_RESULT':
            return {
                ...state,
                inputValue : action.newData.inputValue,
                organisationLinks : action.newData.organisationLinks,
                organisationList : action.newData.organisationList,
                activePage : action.newData.activePage,
                isLoading : action.newData.isLoading
            };
        case 'GET_SEARCH_RESULT_ERROR':
            return {
                ...state,
                error: action.error
            };
        case 'GET_ORGANISATION':
            return {
                ...state,
                isLoading : action.newData.isLoading,
                currentOrganisation : action.newData.currentOrganisation,
                usersLinks : action.newData.usersLinks,
                usersList : action.newData.usersList,
                collaboratorsLinks : action.newData.collaboratorsLinks,
                collaboratorsList : action.newData.collaboratorsList,
            };
        case 'GET_ORGANISATION_ERROR':
            return {
                ...state,
                error: action.error
            };
        case 'GET_USER_INFO':
            return {
                ...state,
                usersLinks : action.newData.usersLinks,
                currentUser : action.newData.currentUser,
                followersLinks : action.newData.followersLinks,
                followersList : action.newData.followersList,
                followingLinks : action.newData.followingLinks,
                followingList : action.newData.followingList,
                isLoading : action.newData.isLoading
            };
        case 'GET_USER_INFO_ERROR':
            return {
                ...state,
                error: action.error
            };
        case 'CLICK_ORGANISATION':
            return {
                ...state,
                organisationLinks : action.newData.organisationLinks,
                organisationList : action.newData.organisationList,
                activePage : action.newData.activePage,
                isLoading : action.newData.isLoading
            };
        case 'CLICK_ORGANISATION_ERROR':
            return {
                ...state,
                error: action.error
            };
        case 'CLICK_USERS':
            return {
                ...state,
                usersLinks : action.newData.usersLinks,
                usersList : action.newData.usersList,
                activePage : action.newData.activePage,
                isLoading : action.newData.isLoading
            };
        case 'CLICK_USERS_ERROR':
            return {
                ...state,
                error: action.error
            };
        case 'CLICK_COLLABORATORS':
            return {
                ...state,
                collaboratorsLinks : action.newData.collaboratorsLinks,
                collaborators : action.newData.collaborators,
                activePage : action.newData.activePage,
                isLoading : action.newData.isLoading
            };
        case 'CLICK_COLLABORATORS_ERROR':
            return {
                ...state,
                error: action.error
            };
        case 'CLICK_FOLLOWERS':
            return {
                ...state,
                followersLinks : action.newData.followersLinks,
                followersList : action.newData.followersList,
                activePage : action.newData.activePage,
                isLoading : action.newData.isLoading
            };
        case 'CLICK_FOLLOWERS_ERROR':
            return {
                ...state,
                error: action.error
            };
        case 'CLICK_FOLLOWING':
            return {
                ...state,
                followingLinks : action.newData.followingLinks,
                followingList : action.newData.followingList,
                activePage : action.newData.activePage,
                isLoading : action.newData.isLoading
            };
        case 'CLICK_FOLLOWING_ERROR':
            return {
                ...state,
                error: action.error
            };
        default:
            return state
    }
};