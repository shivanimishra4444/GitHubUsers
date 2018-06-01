import axios from 'axios';
import {config} from './url'

// Gets an array of users given a string to search for.
// Succes and error handlers required
export const fetchUsers = (searchString, pageNumber, successHandler, errorHandler) => {
    console.log(`${config.getUsersUrl}${searchString}&page=${pageNumber}&per_page=12`)
    axios.get(`${config.getUsersUrl}${searchString}&page=${pageNumber}&per_page=12`)
        .then((response) => {
            successHandler(response.data.items, searchString)
        })
        .catch((err) => {
            errorHandler(err)
        })
}
// Gets an array of repositories for a selected user.
// Succes and error handlers required
export const fetchRepos = (name, pageNumber,successHandler, errorHandler) => {
    console.log(`${config.getRepoUrl}/${name}/repos?page=${pageNumber}&per_page=20`)
    axios.get(`${config.getRepoUrl}/${name}/repos?page=${pageNumber}&per_page=20`)
        .then((response) => {
            successHandler(response.data, name)
        })
        .catch((err) => {
            errorHandler(err)
        })
}