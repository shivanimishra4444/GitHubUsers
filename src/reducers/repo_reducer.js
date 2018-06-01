import {
        SEARCH_REPO_PENDING,
        SEARCH_REPO_SUCCESS,
        SEARCH_REPO_FAIL,
        SET_RESULTS_PAGE
    } from '../actions/action_types';
const repoReducer = function (state = {retrieved: {},resultsPage: 1,fetchingRepos: false,fetched: false,repo_item:[]}, action)
{
    switch (action.type) {
        case SEARCH_REPO_PENDING: {
        return {
            ...state,
            retrieved: {},
            fetched: false,
            fetchingRepos: true,
        }
    }
    case SEARCH_REPO_SUCCESS: {
        const repo= state[action.id] ||[];
        return {
            ...state,
            retrieved: {...repo.concat(action.repos)},
            [action.id]:repo.concat(action.repos),
            repo_item:action.repos,
            fetched: true,
            fetchingRepos: false
        }
    }
       
    case SEARCH_REPO_FAIL: {
        return {
            ...state,
            retrieved: {},
            fetched: false,
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

export default repoReducer