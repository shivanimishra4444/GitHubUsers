import { SEARCH_USER_PENDING,
        SEARCH_USER_SUCCESS,
        SEARCH_USER_FAIL,
        SET_RESULTS_PAGE,
        SEARCH_REPO_PENDING,
        SEARCH_REPO_SUCCESS,
        SEARCH_REPO_FAIL
       } from '../actions/action_types';

const userReducer = function (state = {retrieved: {} ,resultsPage: 1,fetchingRepos: false,fetched: false}, action)
{
    switch (action.type) {
    case SEARCH_USER_PENDING: {
        return {
            ...state,
            retrieved: {}
        }
    }
   case SEARCH_USER_SUCCESS: {
        return {
            ...state,
            [action.users.id]:action.users.data,
            retrieved: action.users,
            userToSearch: action.userToSearch,
            fetched: true,
            fetchingRepos: false
        }
    }      
    case SEARCH_USER_FAIL: {
        
        return {
            ...state,
            retrieved: {},
            fetched: true,
            fetchingRepos: false
        }
    }
    case SET_RESULTS_PAGE: {
        return {
            ...state,
            resultsPage: action.resultsPage
        }
    }
    default: {
        return {
            ...state
        }
    }
    }
}

export default userReducer
