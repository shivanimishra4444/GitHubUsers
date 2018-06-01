import { SEARCH_USER_PENDING,
        SEARCH_USER_SUCCESS,
        SEARCH_USER_FAIL,
        SET_RESULTS_PAGE,
        SEARCH_REPO_PENDING,
        SEARCH_REPO_SUCCESS,
        SEARCH_REPO_FAIL
       } from './action_types';

export const fetchUserPending = (userName) => {
    return {
        type: SEARCH_USER_PENDING,
        userNameToSearch: userName
    }
}

export const fetchUserSuccess = (users, userToSearch) => {
    return {
        type: SEARCH_USER_SUCCESS,
        users: users,
        userToSearch: userToSearch
    }
}

export const fetchUserFail = (error) => {
    return {
        type: SEARCH_USER_FAIL,
        error: error
    }
}

export const setResultsPage = (pageNumber) => {
    return {
        type: SET_RESULTS_PAGE,
        resultsPage: pageNumber
    }
}

export const fetchRepoPending = (id) => {
    return {
        type: SEARCH_REPO_PENDING,
        id: id
    }
}

export const fetchRepoSuccess = (repos, id) => {
    return {
        type: SEARCH_REPO_SUCCESS,
        repos: repos,
        id: id
    }
}

export const fetchRepoFail = (error) => {
    return {
        type: SEARCH_REPO_FAIL,
        error: error
    }
}
